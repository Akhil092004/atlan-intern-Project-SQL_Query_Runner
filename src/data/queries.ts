/* eslint-disable @typescript-eslint/no-explicit-any */
import data from './data.json';

console.log(data);

const queries = [
    "Show all Products in the shop",
    "Get Quantity of Products in the shop",
    "Get the total price of all products in the shop",
    "Show Products with empty stock",
    "Show discontinued products",
    "Show products with units on order",
    "Show products that need to be reordered",
    "Get the average unit price of all products",
    "Get the most expensive product",
    "Get the cheapest product"
];

const dataForQueries: any[][] = [];

dataForQueries.push(data); // 1. All products
dataForQueries.push(data.map(({ productID, productName, unitsInStock }) => ({ productID, productName, unitsInStock }))); // 2. Quantity of products
dataForQueries.push([{ totalPrice: data.reduce((acc, { unitsInStock, unitPrice }) => acc + (unitsInStock * unitPrice), 0) }]); // 3. Total price in an array
dataForQueries.push(data.filter(({ unitsInStock }) => unitsInStock === 0)); // 4. Products with empty stock
dataForQueries.push(data.filter(({ discontinued }) => discontinued === 1)); // 5. Discontinued products
dataForQueries.push(data.filter(({ unitsOnOrder }) => unitsOnOrder > 0)); // 6. Products with units on order
dataForQueries.push(data.filter(({ unitsInStock, reorderLevel }) => unitsInStock <= reorderLevel)); // 7. Products needing reorder
dataForQueries.push([{ averagePrice: data.reduce((acc, { unitPrice }) => acc + unitPrice, 0) / data.length }]); // 8. Average unit price
dataForQueries.push([data.reduce((max, product) => (product.unitPrice > max.unitPrice ? product : max), data[0])]); // 9. Most expensive product
dataForQueries.push([data.reduce((min, product) => (product.unitPrice < min.unitPrice ? product : min), data[0])]); // 10. Cheapest product

export { queries, dataForQueries };
