import React from "react";
// import PropTypes from 'prop-types';
// import MadeData from '../Data/Data';
// import { scaleTime } from 'd3-scale';
// import { ChartCanvas, Chart } from "react-stockcharts";
// import { CandlestickSeries } from "react-stockcharts/lib/series";
// import { XAxis, YAxis } from "react-stockcharts/lib/axes";
// import { utcDay } from "d3-time";
// import { fitWidth } from "react-stockcharts/lib/helper";
// import { timeIntervalBarWidth } from "react-stockcharts/lib/utils";
import './Chart.css';
import { Bar, Line, Pie } from "react-chartjs-2";


class Chart extends React.Component {
    // state = {
    //     chartData: {
    //         labels: ['Boston', 'Worchester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
    //         datasets: [
    //             {
    //                 label: 'Population',
    //                 data: [617594, 181045, 153060, 106519, 105162, 95072],
    //                 backgroundColor: [
    //                     'rgba(255, 99, 132, 0.6)',
    //                     'rgba(54, 162, 235, 0.6)',
    //                     'rgba(255, 206, 86, 0.6)',
    //                     'rgba(75, 192, 192, 0.6)',
    //                     'rgba(153, 102, 255, 0.6)',
    //                     'rgba(255, 159, 64, 0.6)',
    //                     'rgba(255, 99, 132, 0.6)'
    //                 ]
    //             }
    //         ]
    //     }
    // };



    render() {
        let { chartDatas } = this.props;

        return (
            <div className="Chart">
                <h4 style={{textAlign: 'center'}}>Chart Component</h4>
               <Line
                   data={chartDatas}
                   height={200}
                   width={700}
                   options={{
                       title: {
                           display: this.props.displayTitle,
                           text: 'Largest Cities in Massachusetts',
                           fontSize: 15
                       },
                       legend: {
                           display: this.props.displayLegend,
                           position: this.props.legendPosition
                       }
                   }}

               />

            </div>
        );
    }
}

Chart.defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'bottom'
};

export default Chart;
