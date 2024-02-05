import express from 'express';
import cors from 'cors';
import { stock, getStocksSubset } from './stocks';

const app = express();
const port = 3000;

const allStock: stock[] = [
    {
        "id": 1,
        "brand": "Apple",
        "model": "iPhone 15 128GB",
        "color": "GOLD",
        "quantity": 100
    },
    {
        "id": 2,
        "brand": "Apple",
        "model": "iPhone 15 256GB",
        "color": "SILVER",
        "quantity": 200
    },
    {
        "id": 3,
        "brand": "Apple",
        "model": "iPhone 15 512GB",
        "color": "SPACE GREY",
        "quantity": 300
    },
    {
        "id": 4,
        "brand": "Apple",
        "model": "iPhone 15 Pro 128GB",
        "color": "GOLD",
        "quantity": 400
    },
    {
        "id": 5,
        "brand": "Apple",
        "model": "iPhone 15 Pro 256GB",
        "color": "SILVER",
        "quantity": 500
    }
];

// Use CORS middleware
app.use(cors());

app.get('/stocks', (req, res) => {
    const limit = parseInt(req.query.limit as string) || 10;
    const offset = parseInt(req.query.offset as string) || 0;

    const stocksSubset = getStocksSubset(allStock, limit, offset);

    res.json(stocksSubset);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
