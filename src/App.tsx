import React, { useEffect, useState } from 'react';
import './App.css';
import DoughnutChart from './components/DoughnutChart';
import HistoricalChart from './components/HistoricalChart';
import VegaAppService from './services/VegaAppService';

function App() {

  const [assets, setAssets] = useState<{ id: string; name: string; type: string; }[]>([]);
  const [prices, setPrices] = useState<{ id: string; asset: string; price: number; }[]>([]);
  const [portfolios, setPortfolios] = useState<{ positions: { asOf: string; asset: string; quantity: number; }[] }>({ positions: [] });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [assetsData, pricesData, portfoliosData] = await Promise.all([
          VegaAppService.getAssets(`/assets`),
          VegaAppService.getPrices(`/prices?assets=BTC,APPL,ETH,USD,AMZN`),
          VegaAppService.getPortfolios(`/portfolios?asOf=2023-01-01`)
        ]);
        
        setAssets(assetsData);
        setPrices(pricesData);
        setPortfolios(portfoliosData);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching data", error);
        setError('Error fetching data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="app-container">
      {loading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="charts-container">
          <div className="chart">
            <DoughnutChart
              assets={assets}
              prices={prices}
              portfolios={portfolios} />
          </div>
          <div className="chart">
            <HistoricalChart
              prices={prices}
              portfolios={portfolios} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
