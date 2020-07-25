import React from 'react';
import Header from "./components/Header/Header";
import SearchButton from "./components/SearchButton/SearchButton";
import Details from './components/Details/Details';
import Footer from "./components/Footer/Footer";

import { v4 as uuid } from 'uuid';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

//let RANDOM_USER ='https://api.randomuser.me/';
let API_KEY = 'MA1OXYPUVUB5V340';

class App extends React.Component {
    state = {
        query: [],
        info: [],
        symbol: [],

        day: [],
        openValue: [],
        highValue: [],
        lowValue: [],
        closeValue: [],
        volume: [],

        name: [],
        sector: [],
        industry: [],
        country: [],
        address: [],
        employees: [],
        earningPerShare: [],
        profitMargin: [],
        description: [],

        open: [],
        high: [],
        low: [],
        price: [],
        latestTradingDay: [],
        previousClose: [],
        lastVolumeDay: [],

        actSymbol: [],
        error: "Please enter a value !!!"
    };

    handleSubmit =  (event) => {
        let infos = [];
        let symbols = [];

        let days = [];
        let openValues = [];
        let highValues =[];
        let lowValues = [];
        let closeValues = [];
        let volumes =[];

        let names = [];
        let sectors = [];
        let industrys = [];
        let countrys = [];
        let addresss = [];
        let employeess = [];
        let earningPerShares = [];
        let profitMargins = [];
        let descriptions = [];

        let opens = [];
        let highs = [];
        let lows = [];
        let prices = [];
        let latestTradingDays = [];
        let previousCloses = [];
        let lastVolumeDays = [];


        event.preventDefault();
        let query = event.target.serciValue.value;
        let URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${query}&apikey=${API_KEY}`;
        let URL2 = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${query}&apikey=${API_KEY}`;
        let URL3 = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${query}&apikey=${API_KEY}`;
        let URLS = [URL, URL2, URL3];
        let requests = URLS.map( url => fetch(url));
        Promise.all( requests)
            .then( res => Promise.all( res.map( r => r.json()) ))
            .then( results => {
                let data = results[0];
                let data1 = results[1];
                let data2 = results[2];

                for (let key in data['Meta Data']) {
                    symbols.push(data['Meta Data']['2. Symbol']);
                    infos.push(data['Meta Data'][key]);
                }
                for (let key in data['Time Series (Daily)']) {
                    days.push(key);
                    openValues.push(data['Time Series (Daily)'][key]['1. open']);
                    highValues.push(data['Time Series (Daily)'][key]['2. high']);
                    lowValues.push(data['Time Series (Daily)'][key]['3. low']);
                    closeValues.push(data['Time Series (Daily)'][key]['4. close']);
                    volumes.push(data['Time Series (Daily)'][key]['5. volume']);
                }
                for (let key in data1) {
                    names.push(data1.Name);
                    sectors.push(data1.Sector);
                    industrys.push(data1.Industry);
                    countrys.push(data1.Country);
                    addresss.push(data1.Address);
                    employeess.push(data1.FullTimeEmployees);
                    earningPerShares.push(data1.RevenuePerShareTTM);
                    profitMargins.push(data1.ProfitMargin);
                    descriptions.push(data1.Description);
                }
                for (let key in data2["Global Quote"]) {
                    opens.push(data2["Global Quote"]['02. open']);
                    highs.push(data2["Global Quote"]['03. high']);
                    lows.push(data2["Global Quote"]['04. low']);
                    prices.push(data2["Global Quote"]['05. price']);
                    lastVolumeDays.push(data2["Global Quote"]['06. volume']);
                    latestTradingDays.push(data2["Global Quote"]['07. latest trading day']);
                    previousCloses.push(data2["Global Quote"]['08. previous close']);
                }

                if (!query) {
                    this.setState({error: "Please enter a value !!!" });
                } else {
                this.setState({
                    query: query,
                    info: infos,
                    symbol: symbols,
                    day: days,
                    openValue: openValues,
                    highValue: highValues,
                    lowValue: lowValues,
                    closeValue: closeValues,
                    volume: volumes,
                    name: names,
                    sector: sectors,
                    industry: industrys,
                    country: countrys,
                    address: addresss,
                    employees: employeess,
                    earningPerShare: earningPerShares,
                    profitMargin: profitMargins,
                    description: descriptions,
                    open: opens,
                    high: highs,
                    low: lows,
                    price: prices,
                    latestTradingDay: latestTradingDays,
                    previousClose: previousCloses,
                    lastVolumeDay: lastVolumeDays,
                    error: null
                });
                }
            });

    };

    listOfCompanies = () => {
        fetch('https://pkgstore.datahub.io/JohnSnowLabs/list-of-companies-in-the-new-york-stock-exchange/list-of-companies-in-the-new-york-stock-exchange-csv_json/data/0026360bbb7be2840f71db501b9bdede/list-of-companies-in-the-new-york-stock-exchange-csv_json.json')
            .then( res => res.json())
            .then( res => {
                let actSymbols = [];
                for (let i = 0; i < res.length; i++){
                    actSymbols.push(res[i]["ACT_Symbol"]);
                }
                //console.log(actSymbols);
                this.setState({ actSymbol: actSymbols });
            })
    };

    componentDidMount() {
        this.listOfCompanies();
    }

    render() {
        let {symbol, name, industry, address, employees, earningPerShare, profitMargin, latestTradingDay,  price, actSymbol, description, sector } = this.state;

        return (
            <Router>
                <Switch>
                    <>
                        <Header />
                        <Route exact path='/'>
                            <SearchButton serciTerm={this.handleSubmit} />
                            <div className="container">
                                <div className="row">

                                    <div id="mycompaniez" className="col-sm-4 col-md-2 mb-5 items">
                                        <div className="text-bolduit"><h2>Symbols</h2></div>
                                        <ul>
                                            {actSymbol.map( act => {
                                                return (
                                                    <li key={uuid()} >{act}</li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                    { this.state.error ?  <div className=" col-sm-4 col-md-10 d-flex justify-content-center" > <h1>{this.state.error}</h1> </div> : <>
                                        <div className=" col-sm-8 col-md-4 items">
                                            <div className="text-bolduit"><h2>Overview</h2></div>
                                            <p><span className="simbol text-bolduit">{symbol[0]} -</span> <span> {name[0]}</span></p>
                                            <p><span className="text-bolduit">Sector:</span> {sector[0]} - {industry[0]}</p>
                                            <p><span className="text-bolduit">Adress:</span> {address[0]}</p>
                                            <p><span className="text-bolduit">Number of employees:</span> {employees[0]}</p>
                                            <p><span className="text-bolduit">Earning/Profit per share:</span> {earningPerShare[0]} / {profitMargin[0]}</p>
                                            <p><span className="text-bolduit">{latestTradingDay[0]} was the last trading day and the price was {price[0]}</span></p>
                                            <Link to={{
                                                pathname: `/${symbol[0]}`
                                            }} >
                                                <button className="btn btn-outline-primary main-page-button">Details</button>
                                            </Link>
                                        </div>

                                        <div className="col-sm-12 col-md-6 items">
                                            <div><h2>Description</h2></div>
                                            <p className="text-bolduit descriere">{description[0]}</p>
                                        </div>  </>  }


                            </div>
                                <p style={{textAlign: 'center', color: 'rgb(153, 153, 153)', textDecoration: 'underline', marginTop: '2rem'}}>API Limitations: 5 request/minute, 500 requests/day</p>
                            </div>
                        </Route>

                                <Route exact path="/:symbol">
                                    <Details
                                        info={this.state.info}
                                        symbol={this.state.symbol}
                                        day={this.state.day}
                                        openValue={this.state.openValue}
                                        highValue={this.state.highValue}
                                        lowValue={this.state.lowValue}
                                        closeValue={this.state.closeValue}
                                        volume={this.state.volume}
                                    />
                                </Route>

                        <Footer />
                    </>
                </Switch>
            </Router>
        );
    }
}

export default App;
