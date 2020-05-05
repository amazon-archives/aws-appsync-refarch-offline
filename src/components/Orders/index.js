import React, { useEffect, useState } from 'react';
import { RefreshControl } from 'react-native';
import { Container, Content } from 'native-base';
import { DataStore } from '@aws-amplify/datastore';
import OrderList from '../OrderList';
import { Order, LineItem } from '../../models';

const Orders = (props) => {

    const [loading, setLoading] = useState(false);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        refetch();
        const subscription = DataStore.observe(Order).subscribe(msg => refetch());
        return () => subscription.unsubscribe();
    }, []);

    async function refetch() {
        const data = await DataStore.query(Order);
        const sortedOrders = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setOrders(sortedOrders);
    }

    async function openReceipt(orderId) {
        const order = await DataStore.query(Order, orderId);
        const allItems = await DataStore.query(LineItem);
        const lineItems = allItems.filter(li => li.order && li.order.id === order.id);
        return props.navigation.push('Receipt', { 
            order: {
                ...order,
                lineItems,
            }
        });
    }

    return (
        <Container>
            <Content refreshControl={
                <RefreshControl
                    onRefresh={refetch}
                    refreshing={loading}
                />
            }>
                <OrderList orders={orders} onSelectOrder={openReceipt} />
            </Content>
        </Container>
    )
};

export default Orders;