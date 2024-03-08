import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import '../css/chart.css';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
    assets: {
        id: string;
        name: string;
        type: string;
    }[];
    prices: {
        id: string;
        asset: string;
        price: number;
    }[];
    portfolios: {
        positions: {
            asset: string;
            quantity: number;
        }[];
    };
}

const DoughnutChart: React.FC<Props> = (props) => {
    const { assets, prices, portfolios } = props;

    const [level, setLevel] = useState<string>('parent');
    const [type, setType] = useState<string | null>(null);
    
    const handleChartClick = (elements: any) => {
        let tooltip = elements.chart.tooltip.title[0];
        if (tooltip === 'Cryptocurrency' || tooltip === 'Stock' || tooltip === 'Cash') {
            setType(tooltip);
            setLevel('child'); // Switch to child level
        }
        else if (tooltip === 'Back') {
            setLevel('parent'); // Switch back to parent level
        }
    };

    const data: number[] = [];
    const labels: string[] = []; 
    const assetMap: Map<string, number> = new Map();
    let childChartData: { labels: string[], datasets: any[] } = { labels: [], datasets: [] };

    // Calculate the value of each asset
    portfolios.positions.forEach(position => {
        const asset = assets.find((asset: { id: string; }) => asset.id === position.asset);
        const priceInfo = prices.find((price: { asset: string; }) => price.asset === position.asset);
        if (priceInfo && asset) {
            const value = position.quantity * priceInfo.price;
    
            if (!assetMap.has(asset.type)) {
                assetMap.set(asset.type, value);
            } else {
                assetMap.set(asset.type, assetMap.get(asset.type)! + value);
            }
        }
    });

    // Push data to chart
    assetMap.forEach((value, key) => {
        labels.push(key);
        data.push(value);
    });

    const parentChartData = {
        labels: labels,
        datasets: [
            {
                label: '#Assets',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            }
        ]
    };

    if (level === 'child') {
        const childdata: number[] = [];
        const childlabels: string[] = [];
        const childassetMap: Map<string, number> = new Map();

        portfolios.positions.forEach(position => {
            const asset = assets.find((asset: { type: string | null; id: string; }) => asset.type === type && asset.id === position.asset);
            const value = position.quantity;

            if (asset && !childassetMap.has(asset.id)) {
                childassetMap.set(asset.id, value);
            } else if (asset) {
                childassetMap.set(asset.id, childassetMap.get(asset.id)! + value);
            }
        });

        childassetMap.forEach((value, key) => {
            childlabels.push(key);
            childdata.push(value);
        });
        childChartData = {
            labels: childlabels,
            datasets: [
                {
                    label: '#Specific asset',
                    data: childdata,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1,
                }
            ]
        };
    }

    const options: ChartOptions<'doughnut'> = {
        // maintainAspectRatio: false,
        responsive: true,
        onClick: handleChartClick,
        plugins: {
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
            legend: {
                position: 'top',
                labels: {
                    color: 'white',
                },
            },
        },
    };

    return (
        <div style={{ width: '500px', backgroundColor: 'black', border: '1px solid grey', borderRadius: '10px', boxShadow: '0 24px 20px #0003,inset 0 2px 2px #52515480', }}>
            <h2 className="chart-title" style={{ textAlign: 'center', color: 'white' }}>Portfolio Balance Doughnut Chart</h2>
            {level === 'child' ?
                <button onClick={() => setLevel('parent')} className='action-button'>
                    Back
                </button>
            : ''}
            <div style={{  margin: '30px' }}>
                <Doughnut
                    data={level === 'parent' ? parentChartData : childChartData}
                    options={options}
                />
                {level === 'parent' ? <h3 className="chart-message" style={{ textAlign: 'center', color: 'white' }}>Click on assets to view as specific asset</h3> : ''}
            </div>
        </div>
    );
};

export default DoughnutChart;
