export const addLineItem = (product) => ({
    type: "ADD_LINE_ITEM",
    product,
});

export const startNewOrder = () => ({
    type: "START_NEW_ORDER",
});