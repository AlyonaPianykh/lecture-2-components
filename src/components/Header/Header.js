import React, {Component} from 'react';
import logo from '../../logo.svg';
import { withRouter } from "react-router";

import {
  Link
} from "react-router-dom";
import './Header.scss';
import {Button} from "../Button";

const CN = 'default-header';

class Header extends Component {
    constructor(props){
        super(props);
    }

    onBackClick = () => {
        const {history} = this.props;

        history.goBack('')
    };

    onForwardClick = () => {
        const {history} = this.props;

        history.goForward()
    };

    render() {
        const { className, greeting = "test", showLogo, children } = this.props;

        return (
            <header className={`${CN} ${className}`}>
                { showLogo && (
                    <img src={logo} className={`${CN}-logo`} alt="logo"/>
                )
                }

                {greeting}
                {children}

                <Link to="/" className={`${CN}__link`}>Home</Link>
                <Link to="/doggos" className={`${CN}__link`} >Doggos</Link>
                <Link to="/cats" className={`${CN}__link`} >Cats</Link>
                <Button onClick={this.onBackClick} label='Back'/>
                <Button onClick={this.onForwardClick} label='Forward'/>
            </header>
        );
    }
};

export default withRouter(Header);
