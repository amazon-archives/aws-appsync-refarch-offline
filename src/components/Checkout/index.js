import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    Text,
    Container,
    Content,
    Button,
    List,
    ListItem,
    Left,
    Right,
    Body,
} from 'native-base';
import { startNewOrder } from '../../redux/actions';
import { DataStore } from "@aws-amplify/datastore";
import { Order, LineItem, Product } from '../../models';
import styles from './styles';

const Checkout = (props) => {
    
    const order = useSelector(state => state.order);
    const dispatch = useDispatch();

    async function submitOrder() {
        const now = new Date().toISOString();
        const newOrder = await DataStore.save(
            new Order({
                total: order.total,
                subtotal: order.subtotal,
                tax: order.tax,
                createdAt: now,
            })
        );

        const promises = order.lineItems.map(lineItem => {
            return DataStore.save(
                new LineItem({
                    qty: lineItem.qty,
                    description: lineItem.description,
                    price: lineItem.price,
                    total: lineItem.total,
                    order: newOrder, // associate to order
                    product: lineItem.product, // associate to product
                })
            );
        });

        await Promise.all(promises);
    }

    async function checkoutBtnHandler() {
        await submitOrder();
        dispatch(startNewOrder());
        props.navigation.goBack();
    }

    const lineItemList = order.lineItems.map(lineItem => (
        <ListItem icon key={lineItem.sku}>
            <Left>
                <Text>{lineItem.qty}</Text>
            </Left>
            <Body>
                <Text>{lineItem.description}</Text>
            </Body>
            <Right>
                <Text>${lineItem.total.toFixed(2)}</Text>
            </Right>
        </ListItem>
    ));

    return (
        <Container>
            <Content>
                <Text style={styles.totalTxt}>TOTAL</Text>
                <Text style={styles.totalQty}>${order.total.toFixed(2)}</Text>
                <List>
                    <ListItem itemDivider>
                        <Text>&nbsp;</Text>
                    </ListItem>
                    {lineItemList}
                    <ListItem itemDivider>
                        <Text>&nbsp;</Text>
                    </ListItem>
                    <ListItem>
                        <Body>
                            <Text style={styles.subtotalsTxt}>Subtotal</Text>
                        </Body>
                        <Right>
                            <Text>${order.subtotal.toFixed(2)}</Text>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Body>
                            <Text style={styles.subtotalsTxt}>Tax</Text>
                        </Body>
                        <Right>
                            <Text>${order.tax.toFixed(2)}</Text>
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Body>
                            <Text style={styles.subtotalsTxt}>Total</Text>
                        </Body>
                        <Right>
                            <Text>${order.total.toFixed(2)}</Text>
                        </Right>
                    </ListItem>
                </List>
                <Button block info style={styles.checkoutBtn} onPress={checkoutBtnHandler} disabled={order.lineItems.length === 0}>
                    <Text style={styles.checkoutTxt}>Checkout</Text>
                </Button>
            </Content>
        </Container>
    );
};

export default Checkout;