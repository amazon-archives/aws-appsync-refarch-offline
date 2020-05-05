// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Order, LineItem, Product } = initSchema(schema);

export {
  Order,
  LineItem,
  Product
};