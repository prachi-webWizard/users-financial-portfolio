interface Asset {
    id: string;
    name: string;
    type: string;
}

interface Price {
    id: string;
    asset: string;
    price: number;
}

interface PortfolioPosition {
    id: number;
    asset: string;
    quantity: number;
    asOf: string;
    price: number;
}

interface Portfolios {
    id: string;
    asOf: string;
    positions: PortfolioPosition[];
};


const assets: Asset[] = [
    {
        "id": "BTC",
        "name": "Bitcoin",
        "type": "Cryptocurrency"
    },
    {
        "id": "AAPL",
        "name": "Apple Inc.",
        "type": "Stock"
    },
    {
        "id": "ETH",
        "name": "Ethereum",
        "type": "Cryptocurrency"
    },
    {
        "id": "AMZN",
        "name": "Amazon.com Inc.",
        "type": "Stock"
    },
    {
        "id": "USD",
        "name": "US Dollar",
        "type": "Cash"
    }
];

const prices: Price[] = [
    {
        "id": "1",
        "asset": "BTC",
        "price": 50
    },
    {
        "id": "2",
        "asset": "AAPL",
        "price": 12
    },
    {
        "id": "3",
        "asset": "ETH",
        "price": 60
    },
    {
        "id": "4",
        "asset": "USD",
        "price": 10
    },
    {
        "id": "5",
        "asset": "AMZN",
        "price": 90
    }
];

const portfolios: Portfolios = {
    "id": "portfolio-1",
    "asOf": "2023-01-01T12:00:00Z",
    "positions": [
    //january
        {
            "id": 1,
            "asset": "BTC",
            "quantity": 2,
            "asOf": "2023-01-01T12:00:00Z",
            "price": 50
        },
        {
            "id": 2,
            "asset": "AAPL",
            "quantity": 6,
            "asOf": "2023-01-01T12:00:00Z",
            "price": 12
        },
        {
            "id": 3,
            "asset": "USD",
            "quantity": 2,
            "asOf": "2023-01-01T12:00:00Z",
            "price": 10
        },
        {
            "id": 4,
            "asset": "ETH",
            "quantity": 1,
            "asOf": "2023-01-01T12:00:00Z",
            "price": 60
        },
        {
            "id": 5,
            "asset": "AMZN",
            "quantity": 3,
            "asOf": "2023-01-01T12:00:00Z",
            "price": 90
        },
        //February
        {
            "id": 1,
            "asset": "BTC",
            "quantity": 3,
            "asOf": "2023-02-01T12:00:00Z",
            "price": 50
        },
        {
            "id": 2,
            "asset": "AAPL",
            "quantity": 7,
            "asOf": "2023-02-01T12:00:00Z",
            "price": 12
        },
        {
            "id": 3,
            "asset": "USD",
            "quantity": 3,
            "asOf": "2023-02-01T12:00:00Z",
            "price": 10
        },
        {
            "id": 4,
            "asset": "ETH",
            "quantity": 2,
            "asOf": "2023-02-01T12:00:00Z",
            "price": 60
        },
        {
            "id": 5,
            "asset": "AMZN",
            "quantity": 4,
            "asOf": "2023-02-01T12:00:00Z",
            "price": 90
        },
        //March
        {
            "id": 1,
            "asset": "BTC",
            "quantity": 4,
            "asOf": "2023-03-01T12:00:00Z",
            "price": 50
        },
        {
            "id": 2,
            "asset": "AAPL",
            "quantity": 8,
            "asOf": "2023-03-01T12:00:00Z",
            "price": 12
        },
        {
            "id": 3,
            "asset": "USD",
            "quantity": 4,
            "asOf": "2023-03-01T12:00:00Z",
            "price": 10
        },
        {
            "id": 4,
            "asset": "ETH",
            "quantity": 3,
            "asOf": "2023-03-01T12:00:00Z",
            "price": 60
        },
        {
            "id": 5,
            "asset": "AMZN",
            "quantity": 5,
            "asOf": "2023-03-01T12:00:00Z",
            "price": 90
        },
        //April
        {
            "id": 1,
            "asset": "BTC",
            "quantity": 5,
            "asOf": "2023-04-01T12:00:00Z",
            "price": 50
        },
        {
            "id": 2,
            "asset": "AAPL",
            "quantity": 9,
            "asOf": "2023-04-01T12:00:00Z",
            "price": 12
        },
        {
            "id": 3,
            "asset": "USD",
            "quantity": 5,
            "asOf": "2023-04-01T12:00:00Z",
            "price": 10
        },
        {
            "id": 4,
            "asset": "ETH",
            "quantity": 4,
            "asOf": "2023-04-01T12:00:00Z",
            "price": 60
        },
        {
            "id": 5,
            "asset": "AMZN",
            "quantity": 6,
            "asOf": "2023-04-01T12:00:00Z",
            "price": 90
        },
        //May
        {
            "id": 1,
            "asset": "BTC",
            "quantity": 6,
            "asOf": "2023-05-01T12:00:00Z",
            "price": 50
        },
        {
            "id": 2,
            "asset": "AAPL",
            "quantity": 10,
            "asOf": "2023-05-01T12:00:00Z",
            "price": 12
        },
        {
            "id": 3,
            "asset": "USD",
            "quantity": 6,
            "asOf": "2023-05-01T12:00:00Z",
            "price": 10
        },
        {
            "id": 4,
            "asset": "ETH",
            "quantity": 5,
            "asOf": "2023-05-01T12:00:00Z",
            "price": 60
        },
        {
            "id": 5,
            "asset": "AMZN",
            "quantity": 7,
            "asOf": "2023-05-01T12:00:00Z",
            "price": 90
        },
        //June
        {
            "id": 1,
            "asset": "BTC",
            "quantity": 7,
            "asOf": "2023-06-01T12:00:00Z",
            "price": 50
        },
        {
            "id": 2,
            "asset": "AAPL",
            "quantity": 11,
            "asOf": "2023-06-01T12:00:00Z",
            "price": 12
        },
        {
            "id": 3,
            "asset": "USD",
            "quantity": 7,
            "asOf": "2023-06-01T12:00:00Z",
            "price": 10
        },
        {
            "id": 4,
            "asset": "ETH",
            "quantity": 6,
            "asOf": "2023-06-01T12:00:00Z",
            "price": 60
        },
        {
            "id": 5,
            "asset": "AMZN",
            "quantity": 8,
            "asOf": "2023-06-01T12:00:00Z",
            "price": 90
        },
        //July
        {
            "id": 1,
            "asset": "BTC",
            "quantity": 4,
            "asOf": "2023-07-01T12:00:00Z",
            "price": 50
        },
        {
            "id": 2,
            "asset": "AAPL",
            "quantity": 8,
            "asOf": "2023-07-01T12:00:00Z",
            "price": 12
        },
        {
            "id": 3,
            "asset": "USD",
            "quantity": 4,
            "asOf": "2023-07-01T12:00:00Z",
            "price": 10
        },
        {
            "id": 4,
            "asset": "ETH",
            "quantity": 3,
            "asOf": "2023-07-01T12:00:00Z",
            "price": 60
        },
        {
            "id": 5,
            "asset": "AMZN",
            "quantity": 5,
            "asOf": "2023-07-01T12:00:00Z",
            "price": 90
        },
        //August
        {
            "id": 1,
            "asset": "BTC",
            "quantity": 6,
            "asOf": "2023-08-01T12:00:00Z",
            "price": 50
        },
        {
            "id": 2,
            "asset": "AAPL",
            "quantity": 10,
            "asOf": "2023-08-01T12:00:00Z",
            "price": 12
        },
        {
            "id": 3,
            "asset": "USD",
            "quantity": 6,
            "asOf": "2023-08-01T12:00:00Z",
            "price": 10
        },
        {
            "id": 4,
            "asset": "ETH",
            "quantity": 5,
            "asOf": "2023-08-01T12:00:00Z",
            "price": 60
        },
        {
            "id": 5,
            "asset": "AMZN",
            "quantity": 7,
            "asOf": "2023-08-01T12:00:00Z",
            "price": 90
        },
        //September
        {
            "id": 1,
            "asset": "BTC",
            "quantity": 8,
            "asOf": "2023-09-01T12:00:00Z",
            "price": 50
        },
        {
            "id": 2,
            "asset": "AAPL",
            "quantity": 12,
            "asOf": "2023-09-01T12:00:00Z",
            "price": 12
        },
        {
            "id": 3,
            "asset": "USD",
            "quantity": 8,
            "asOf": "2023-09-01T12:00:00Z",
            "price": 10
        },
        {
            "id": 4,
            "asset": "ETH",
            "quantity": 7,
            "asOf": "2023-09-01T12:00:00Z",
            "price": 60
        },
        {
            "id": 5,
            "asset": "AMZN",
            "quantity": 9,
            "asOf": "2023-09-01T12:00:00Z",
            "price": 90
        },
        //October
        {
            "id": 1,
            "asset": "BTC",
            "quantity": 9,
            "asOf": "2023-10-01T12:00:00Z",
            "price": 50
        },
        {
            "id": 2,
            "asset": "AAPL",
            "quantity": 13,
            "asOf": "2023-10-01T12:00:00Z",
            "price": 12
        },
        {
            "id": 3,
            "asset": "USD",
            "quantity": 9,
            "asOf": "2023-10-01T12:00:00Z",
            "price": 10
        },
        {
            "id": 4,
            "asset": "ETH",
            "quantity": 8,
            "asOf": "2023-10-01T12:00:00Z",
            "price": 60
        },
        {
            "id": 5,
            "asset": "AMZN",
            "quantity": 10,
            "asOf": "2023-10-01T12:00:00Z",
            "price": 90
        },
        //November
        {
            "id": 1,
            "asset": "BTC",
            "quantity": 10,
            "asOf": "2023-11-01T12:00:00Z",
            "price": 50
        },
        {
            "id": 2,
            "asset": "AAPL",
            "quantity": 14,
            "asOf": "2023-11-01T12:00:00Z",
            "price": 12
        },
        {
            "id": 3,
            "asset": "USD",
            "quantity": 10,
            "asOf": "2023-11-01T12:00:00Z",
            "price": 10
        },
        {
            "id": 4,
            "asset": "ETH",
            "quantity": 9,
            "asOf": "2023-11-01T12:00:00Z",
            "price": 60
        },
        {
            "id": 5,
            "asset": "AMZN",
            "quantity": 11,
            "asOf": "2023-11-01T12:00:00Z",
            "price": 90
        },
        //December
        {
            "id": 1,
            "asset": "BTC",
            "quantity": 11,
            "asOf": "2023-12-01T12:00:00Z",
            "price": 50
        },
        {
            "id": 2,
            "asset": "AAPL",
            "quantity": 15,
            "asOf": "2023-12-01T12:00:00Z",
            "price": 12
        },
        {
            "id": 3,
            "asset": "USD",
            "quantity": 11,
            "asOf": "2023-12-01T12:00:00Z",
            "price": 10
        },
        {
            "id": 4,
            "asset": "ETH",
            "quantity": 10,
            "asOf": "2023-12-01T12:00:00Z",
            "price": 60
        },
        {
            "id": 5,
            "asset": "AMZN",
            "quantity": 12,
            "asOf": "2023-12-01T12:00:00Z",
            "price": 90
        },
    ]
};

export { assets, prices, portfolios };
  
  
  