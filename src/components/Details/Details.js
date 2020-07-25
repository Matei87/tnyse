import React from 'react';
import Stocks from "../Stocks/Stocks";
import './Details.css';

class Details extends React.Component {
    render() {
        return (
            <>
            <Stocks
                info={this.props.info}
                symbol={this.props.symbol}
                day={this.props.day}
                openValue={this.props.openValue}
                highValue={this.props.highValue}
                lowValue={this.props.lowValue}
                closeValue={this.props.closeValue}
                volume={this.props.volume}
            />
            </>
        );
    }
}

export default Details;