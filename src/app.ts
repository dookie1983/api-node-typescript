import express from 'express';
import cors from 'cors';
import { stock, getStocksSubset } from './stocks';
import mockData from './mock-data';

const app = express();
const port = 3000;

const allStock: stock[] = mockData.stocks;

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
