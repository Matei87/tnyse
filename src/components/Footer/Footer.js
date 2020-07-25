import React from "react";
import './Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <footer>Made by <div>&nbsp;</div><span>Matei Mircea</span><div>&nbsp;</div> @ {new Date().getFullYear()}</footer>
        );
    }
}

export default Footer;