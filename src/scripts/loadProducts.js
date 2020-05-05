import _ from 'lodash';
import moment from 'moment';
import { DataStore } from '@aws-amplify/datastore';
import { Product } from '../models';

const adjectives = [
    'Hot',
    'Cold',
    'Large',
    'Small',
    'Glazed',
    'Sparkling',
    'Fluffy',
    'Iced',
    'Dirty',
    'Dry',
    'Energy',
    'Nitro',
    'Green',
    'Black',
    'Caramel',
    'Vegan',
    'Organic',
    'Non-Dairy',
    'Gluten Free',
];

const names = [
    'Donut',
    'Coffee',
    'Tea',
    'Muffin',
    'Latte',
    'Capuccino',
    'Espresso',
    'Cortado',
    'Macchiato',
    'Americano',
    'Affogato',
    'Milkshake',
    'Cider',
    'Juice',
    'Sandwich',
    'Panini',
    'Soda',
    'Chocolate',
    'Mocha',
    'Banana Bread',
    'Smoothie',
    'Frappe',
    'Pancakes',
    'Bagel',
    'Breakfast',
    'Ginger Tea',
    'Milk',
    'Freeze',
    'Cookie',
    'Granola Bar',
    'Cupcake',
    'Coffe Beans',
    'Cake',
];

const images = [
    "https://aws-appsync-refarch-offline-assets.s3-us-west-2.amazonaws.com/Cookie%402x.png",
    "https://aws-appsync-refarch-offline-assets.s3-us-west-2.amazonaws.com/Capuccino%402x.png",
    "https://aws-appsync-refarch-offline-assets.s3-us-west-2.amazonaws.com/ChocolateShake%402x.png",
    "https://aws-appsync-refarch-offline-assets.s3-us-west-2.amazonaws.com/Cupcake%402x.png",
    "https://aws-appsync-refarch-offline-assets.s3-us-west-2.amazonaws.com/Donut%402x.png",
    "https://aws-appsync-refarch-offline-assets.s3-us-west-2.amazonaws.com/DripCoffee%402x.png",
    "https://aws-appsync-refarch-offline-assets.s3-us-west-2.amazonaws.com/FoamedMilk%402x.png",
    "https://aws-appsync-refarch-offline-assets.s3-us-west-2.amazonaws.com/FrenchPress%402x.png",
    "https://aws-appsync-refarch-offline-assets.s3-us-west-2.amazonaws.com/Beans%402x.png",
    "https://aws-appsync-refarch-offline-assets.s3-us-west-2.amazonaws.com/Tea%402x.png",
];

/**
 * Generates and saves 5 random products
 */
const load = async () => {
    const promises = [];
    for(let i=0; i<5; i++) {
        promises.push(
            DataStore.save(
                new Product({
                    name: _.sample(adjectives).concat(' ').concat(_.sample(names)),
                    price: parseFloat(_.random(2.5, 9.9).toFixed(2)),
                    sku: moment().format('x'),
                    image: _.sample(images),
                }
            ))
        );
    }
    await Promise.all(promises);
};

export default load;