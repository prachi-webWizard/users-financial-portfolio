import React, { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartOptions } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend );

interface Props {
    prices: { asset: string; price: number }[];
    portfolios: { positions: { asOf: string; asset: string; quantity: number }[] };
}

const HistoricalChart: React.FC<Props> = (props: Props) => {
    const { prices, portfolios } = props;

    const getPrice = (assetId: string): number => {
        const priceData = prices.find(price => price.asset === assetId);
        return priceData ? priceData.price : 0;
    };

    const prepareChartData = (months: number): number[] => {
        const monthValues = new Array(months).fill(0);

        portfolios.positions.forEach(position => {
            const positionDate = new Date(position.asOf);
            const monthIndex = positionDate.getMonth();
            const assetPrice = getPrice(position.asset);
            const totalValue = position.quantity * assetPrice;
            monthValues[monthIndex] += totalValue;
        });

        return monthValues;
    }

    const [chartData, setChartData] = useState<number[]>(prepareChartData(12)); // Initial chart data for 12 months

    const monthsOfYear: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const handleChartData = (months: number): void => {
        setChartData(prepareChartData(months));
    };

    const options: ChartOptions<'line'> = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: 'white',
                },
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
                color: 'white',
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
        },
        scales: {
            y: {
                ticks: {
                    color: 'white',
                },
            },
            x: {
                ticks: {
                    color: 'white',
                },
            },
        },
    };

    const data = {
        labels: monthsOfYear.slice(0, chartData.length),
        datasets: [
            {
                label: 'Portfolio Value Over Time',
                data: chartData,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    return (
        <div style={{ backgroundColor: 'black', border: '1px solid grey', borderRadius: '10px', boxShadow: '0 24px 20px #0003,inset 0 2px 2px #52515480', }}>
            <h2 className="chart-title" style={{ textAlign: 'center', color: 'white' }}>Historical Chart</h2>
            <div style={{ margin: '30px'}}>
                <Line options={options} data={data} />
            </div>
            <div style={{ textAlign: 'center', marginTop: '10px', display: 'flex' }}>
                <button className='action-button' onClick={() => handleChartData(1)}>View 1 Month</button>
                <button className='action-button' onClick={() => handleChartData(3)}>View 3 Months</button>
                <button className='action-button' onClick={() => handleChartData(6)}>View 6 Months</button>
                <button className='action-button' onClick={() => handleChartData(12)}>View 1 Year</button>
            </div>
        </div>
    );
};

export default HistoricalChart;
