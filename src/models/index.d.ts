import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Order {
  readonly id: string;
  readonly total?: number;
  readonly subtotal?: number;
  readonly tax?: number;
  readonly createdAt: string;
  readonly lineItems?: LineItem[];
  constructor(init: ModelInit<Order>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

export declare class LineItem {
  readonly id: string;
  readonly qty?: number;
  readonly order?: Order;
  readonly product?: Product;
  readonly description?: string;
  readonly price?: number;
  readonly total?: number;
  constructor(init: ModelInit<LineItem>);
  static copyOf(source: LineItem, mutator: (draft: MutableModel<LineItem>) => MutableModel<LineItem> | void): LineItem;
}

export declare class Product {
  readonly id: string;
  readonly sku?: string;
  readonly name?: string;
  readonly price?: number;
  readonly image?: string;
  constructor(init: ModelInit<Product>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}