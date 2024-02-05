export interface stock {
    id: number;
    name: string;
    price: number;
    description: string;
}

export function getStocksSubset(stocks: stock[], limit: number, offset: number): stock[] {
    const startIndex = offset;
    const endIndex = offset + limit;
    return stocks.slice(startIndex, endIndex);
}
