import express from 'express';
import { stock, getStocksSubset } from './stocks';

const app = express();
const port = 3000;

const allStock: stock[] = [
    { id: 1, name: 'stock 1', price: 19.99, description: 'Description for stock 1' },
    { id: 2, name: 'stock 2', price: 29.99, description: 'Description for stock 2' },
    // Add more stocks as needed
];

app.get('/stocks', (req, res) => {
    // http://localhost:3000/stocks
    // http://localhost:3000/stocks?limit=0&offset=1
    const limit = parseInt(req.query.limit as string) || 10;
    const offset = parseInt(req.query.offset as string) || 0;

    const stocksSubset = getStocksSubset(allStock, limit, offset);

    res.json(stocksSubset);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
