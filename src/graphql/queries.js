/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncOrders = /* GraphQL */ `
  query SyncOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncLineItems = /* GraphQL */ `
  query SyncLineItems(
    $filter: ModelLineItemFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLineItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        qty
        order {
          id
          total
          subtotal
          tax
          createdAt
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
      nextToken
      startedAt
    }
  }
`;
export const getLineItem = /* GraphQL */ `
  query GetLineItem($id: ID!) {
    getLineItem(id: $id) {
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
export const listLineItems = /* GraphQL */ `
  query ListLineItems(
    $filter: ModelLineItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLineItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        qty
        order {
          id
          total
          subtotal
          tax
          createdAt
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
      nextToken
      startedAt
    }
  }
`;
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        sku
        name
        price
        image
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sku
        name
        price
        image
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
