export interface stock {
    id: number;
    brand: string;
    model: string;
    color: string;
    quantity: number;
}

export function getStocksSubset(stocks: stock[], limit: number, offset: number): stock[] {
    const startIndex = offset;
    const endIndex = offset + limit;
    return stocks.slice(startIndex, endIndex);
}
