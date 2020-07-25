import React from "react";
import Plot from 'react-plotly.js';
import './Stocks.css'

class Stocks extends React.Component {
    render() {
        let { info, symbol, day, openValue, highValue, lowValue, closeValue, volume } = this.props;

        let data = {
            x: day,
            y: highValue,
            type: 'scatter',
            mode: 'lines',
            marker: {color: 'yellow'},
            name: 'high'
            };

        let data1 = {
                x: day,
                y: closeValue,
                type: 'scatter',
                mode: 'lines',
                marker: {color: 'blue'},
                name: 'close'
            };

        let data2 = {
                x: day,
                y: lowValue,
                type: 'scatter',
                mode: 'lines',
                marker: {color: 'red'},
                name: 'low'
            };

        let data3 = {
            x: day,
            y: openValue,
            type: 'scatter',
            mode: 'lines',
            marker: {color: 'green'},
            name: 'open'
            };

        let data4 = {
            x: day,
            y: volume,
            type: 'bar',
            marker: {color: 'green'},
            name: 'open'
            };

        return (
            <div className="container stocks">
                <div className="details-page"><h1>Details</h1></div>
                <p className="details-page-p">{info.join(' - ')}</p>
                <div className="row">
                    <div className="col-md-12 col-xl-12">
                        <Plot
                            data={[data, data1, data2, data3]}
                            layout={{ paper_bgcolor: "rgba(0,0,0,0)", plot_bgcolor: 'rgba(0,0,0,0)',
                                font: {color: 'white'},
                                title: {text: '' + symbol.slice(0, 1), font: {
                                        family: 'Noto Sans JP, sans-serif',
                                        color: 'black',
                                        size: 23,
                                        textTransform: 'uppercase !important' ,
                                        fontWeight: 800
                                    }},
                                legend: { orientation: 'h', traceorder: 'reversed'}, autosize: true}}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                </div>

                    <div className="row">
                        <div className="col-md-12 col-xl-12">
                            <Plot
                                data={[data4]}
                                layout={{ paper_bgcolor: "rgba(0,0,0,0)", plot_bgcolor: 'rgba(0,0,0,0)',
                                    font: {color: 'white'},
                                    title: {text: 'Volumes', font: {
                                            family: 'Noto Sans JP, sans-serif',
                                            color: 'black',
                                            size: 23,
                                            fontWeight: 800
                                        }}, autosize: true } }
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                    </div>

            </div>
        );
    }
}

export default Stocks;