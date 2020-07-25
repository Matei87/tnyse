import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


class Header extends React.Component {
    render() {
        return (
            <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                            <div>
                                <Link to="/"><img src={"nyse-logo.svg"} alt="logo"  /></Link>
                                <p>The New York Stock Exchange</p>
                            </div>
                    </div>
                </div>
            </div>
            </header>
        );

    }
}

export default Header;

