import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import {
    Text,
    List,
    ListItem,
    Right,
    Body,
    Icon,
} from 'native-base';
import styles from './styles';

const OrderList = ({ orders, onSelectOrder }) => {

    function onPress(orderId) {
        if (onSelectOrder) {
            onSelectOrder(orderId);
        }
    }

    const ordersByDay = _.groupBy(orders, order => moment(order.createdAt).format('YYYY-MM-DD'));
    const days = _.keys(ordersByDay);
    const ordersByDayList = days.map(day => {
        const sorted = ordersByDay[day].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        const orderList = sorted.map(order => (
            <ListItem thumbnail button key={order.id} onPress={() => onPress(order.id)}>
                <Body>
                    <Text style={styles.orderTitle}>
                        {moment(order.createdAt).format('hh:mm A')}
                    </Text>
                    <Text note>{order.id}</Text>
                </Body>
                <Right>
                    <Text note>
                        ${order.total.toFixed(2)}
                    </Text>
                    <Icon name="arrow-forward" />
                </Right>
            </ListItem>
        ));

        const sectionTitle = (
            <ListItem itemDivider key={day}>
                <Text>{moment(day).format('MMM Do, YYYY')}</Text>
            </ListItem>
        );
        
        return [sectionTitle, ...orderList];
    });

    return (
        <List>
            {ordersByDayList}
        </List>
    );
};

export default OrderList;