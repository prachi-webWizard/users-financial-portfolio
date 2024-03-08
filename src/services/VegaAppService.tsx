import { assets, prices, portfolios } from "./data";

interface Portfolio {
    id: string;
    asOf: string;
    positions: {
        id: number;
        asset: string;
        quantity: number;
        asOf: string;
        price: number;
    }[];
};

const VegaAppService = {
    // asset api
    async getAssets(value: string): Promise<any[]> {
        return await assets;
    },

    // prices api
    async getPrices(value: string): Promise<any[]> {
        return await prices;
    },

    // portfolio api
    async getPortfolios(value: string): Promise<Portfolio> {
        return await portfolios;
    }
}

export default VegaAppService;
