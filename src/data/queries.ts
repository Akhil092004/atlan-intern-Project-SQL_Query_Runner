/* eslint-disable @typescript-eslint/no-explicit-any */
import data from './data.json';

console.log(data);

const queries = [
    "Show all Products in the shop",
    "Get Quantity of Products in the shop",
    "Get the total price of all products in the shop",
    "Show Products with empty stock"
];

const dataForQueries : any[][] = [];
dataForQueries.push(data); // 1. All products
dataForQueries.push(data.map(({ productID, productName, unitsInStock }) => ({ productID, productName, unitsInStock }))); // 2. Quantity of products
dataForQueries.push([{ totalPrice: data.reduce((acc, { unitsInStock, unitPrice }) => acc + (unitsInStock * unitPrice), 0) }]); // 3. Total price in an array
dataForQueries.push(data.filter(({ unitsInStock }) => unitsInStock === 0)); // 4. Products with empty stock

export { queries, dataForQueries };
