import { orderReducer } from '../reducers';
import { addLineItem, startNewOrder } from '../actions';

describe('order reducer', () => {
    const product = {
        id: 1,
        sku: 'abcd',
        name: 'Chocolate Cookie',
        price: 5
    };

    it('should have an initial state', () => {
        const newState = orderReducer(undefined, {});
        expect(newState).toEqual({
            subtotal: 0,
            totalQty: 0,
            tax: 0,
            total: 0,
            lineItems: [],
        });
    });

    it('should increment totalQty on addLineItem', () => {
        const newState = orderReducer(undefined, addLineItem(product));
        expect(newState.totalQty).toEqual(1);
    });

    it('should add price to subtotal on addLineItem', () => {
        const newState = orderReducer(undefined, addLineItem(product));
        expect(newState.subtotal).toEqual(5);
    });

    it('should add a new lineItem for a new product on addLineItem', () => {
        const newState = orderReducer(undefined, addLineItem(product));
        expect(newState.lineItems.length).toEqual(1);
        expect(newState.lineItems[0]).toEqual({
            qty: 1,
            price: 5,
            description: 'Chocolate Cookie',
            total: 5,
            sku: 'abcd',
        });
    });

    it('should increment qty when adding the same product on addLineItem', () => {
        const stateOne = orderReducer(undefined, addLineItem(product));
        const stateTwo = orderReducer(stateOne, addLineItem(product));
        expect(stateTwo.lineItems.length).toEqual(1);
        expect(stateTwo.lineItems[0].qty).toEqual(2);
    });

    it('should update total when adding the same product on addLineItem', () => {
        const stateOne = orderReducer(undefined, addLineItem(product));
        const stateTwo = orderReducer(stateOne, addLineItem(product));
        expect(stateTwo.lineItems.length).toEqual(1);
        expect(stateTwo.lineItems[0].total).toEqual(10);
    });

    it('should add 2 lineItems when adding 2 different products on addLineItem', () => {
        const productTwo = {
            id: 2,
            sku: 'xyz',
            name: 'Drip Coffee',
            price: 3
        };
        const stateOne = orderReducer(undefined, addLineItem(product));
        const stateTwo = orderReducer(stateOne, addLineItem(productTwo));
        expect(stateTwo.lineItems.length).toEqual(2);
    });

    it('should reset order to initialState on startNewOrder', () => {
        const state = orderReducer(undefined, addLineItem(product));
        const newState = orderReducer(state, startNewOrder());
        expect(newState).toEqual({
            subtotal: 0,
            totalQty: 0,
            tax: 0,
            total: 0,
            lineItems: [],
        });
    })
});