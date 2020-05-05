/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
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
export const onCreateLineItem = /* GraphQL */ `
  subscription OnCreateLineItem {
    onCreateLineItem {
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
export const onUpdateLineItem = /* GraphQL */ `
  subscription OnUpdateLineItem {
    onUpdateLineItem {
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
export const onDeleteLineItem = /* GraphQL */ `
  subscription OnDeleteLineItem {
    onDeleteLineItem {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
