import React, { useEffect, useState } from 'react';
import { RefreshControl } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
    Text,
    Container,
    Content,
    Button,
    List,
    ListItem,
    Thumbnail,
    Left,
    Right,
    Body
} from 'native-base';
import { DataStore } from "@aws-amplify/datastore";
import { Product } from '../../models';
import { addLineItem } from '../../redux/actions';
import styles from './styles';

function Catalog(props) {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const order = useSelector(state => state.order);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchProducts();
    }, []);

    async function fetchProducts() {
        const data = await DataStore.query(Product);
        setProducts(data);
    };

    function checkoutBtnHandler() {
        return props.navigation.push('Checkout');
    }

    function addProductHandler(product) {
        dispatch(addLineItem(product));
    }
    
    const productList = products.map(product => (
        <ListItem thumbnail key={product.id}>
            <Left>
                <Thumbnail square source={{ uri: product.image }} />
            </Left>
            <Body>
                <Text>{product.name}</Text>
                <Text note numberOfLines={1}>${product.price}</Text>
            </Body>
            <Right>
                <Button onPress={() => addProductHandler(product)}>
                    <Text>Add</Text>
                </Button>
            </Right>
        </ListItem>
    ));

    return (
        <Container>
            <Content refreshControl={
                <RefreshControl
                    onRefresh={fetchProducts}
                    refreshing={loading}
                />
            }>
                <Button block info style={styles.checkoutBtn} onPress={checkoutBtnHandler}>
                    <Text style={styles.quantityText}>{order.totalQty}</Text>
                    <Text style={styles.subtotalTxt}>Subtotal ${order.subtotal.toFixed(2)}</Text>
                </Button>
                <List>
                    {productList}
                </List>
            </Content>
        </Container>
    );
};

export default Catalog;