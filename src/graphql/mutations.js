/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      total
      subtotal
      tax
      createdAt
      lineItems {
        items {
          id
          qty
          description
          price
          total
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      total
      subtotal
      tax
      createdAt
      lineItems {
        items {
          id
          qty
          description
          price
          total
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      total
      subtotal
      tax
      createdAt
      lineItems {
        items {
          id
          qty
          description
          price
          total
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createLineItem = /* GraphQL */ `
  mutation CreateLineItem(
    $input: CreateLineItemInput!
    $condition: ModelLineItemConditionInput
  ) {
    createLineItem(input: $input, condition: $condition) {
      id
      qty
      order {
        id
        total
        subtotal
        tax
        createdAt
        lineItems {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      product {
        id
        sku
        name
        price
        image
        _version
        _deleted
        _lastChangedAt
      }
      description
      price
      total
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateLineItem = /* GraphQL */ `
  mutation UpdateLineItem(
    $input: UpdateLineItemInput!
    $condition: ModelLineItemConditionInput
  ) {
    updateLineItem(input: $input, condition: $condition) {
      id
      qty
      order {
        id
        total
        subtotal
        tax
        createdAt
        lineItems {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      product {
        id
        sku
        name
        price
        image
        _version
        _deleted
        _lastChangedAt
      }
      description
      price
      total
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteLineItem = /* GraphQL */ `
  mutation DeleteLineItem(
    $input: DeleteLineItemInput!
    $condition: ModelLineItemConditionInput
  ) {
    deleteLineItem(input: $input, condition: $condition) {
      id
      qty
      order {
        id
        total
        subtotal
        tax
        createdAt
        lineItems {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      product {
        id
        sku
        name
        price
        image
        _version
        _deleted
        _lastChangedAt
      }
      description
      price
      total
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      sku
      name
      price
      image
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      sku
      name
      price
      image
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      sku
      name
      price
      image
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
