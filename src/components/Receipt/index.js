import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import {
    Container,
    Content,
    Text,
    List,
    ListItem,
    Left,
    Right,
    Body,
    Button,
} from 'native-base';
import styles from './styles';

const Receipt = ({ route }) => {
    
    const { order } = route.params;
    const lineItemList = order.lineItems.map(lineItem => (
        <ListItem icon key={lineItem.id}>
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
                <List>
                    <ListItem itemDivider>
                        <Text>&nbsp;</Text>
                    </ListItem>
                    <ListItem>
                        <Body>
                            <Text>Order Number</Text>
                            <Text note>{order.id}</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <Body>
                            <Text>Date</Text>
                            <Text note>{moment(order.createdAt).format('YYYY-MM-DD hh:mm A')}</Text>
                        </Body>
                    </ListItem>
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
                    <ListItem itemDivider>
                        <Text>&nbsp;</Text>
                    </ListItem>
                </List>
            </Content>
        </Container>
    );
};

export default Receipt;