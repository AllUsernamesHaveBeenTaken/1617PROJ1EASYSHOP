/**
 * Created by seppesnoeck on 1/03/17.
 */

import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import { Home } from "./components/home/Home"
import { Landing } from "./components/landing/Landing"
import { Winkels } from "./components/winkels/Winkels"
import {  Boodschappen } from "./components/boodschappen/Boodschappen"
import {  Profiel } from "./components/profiel/Profiel"
import {  WinkelMandje } from "./components/winkelmandje/WinkelMandje"
import {  Producten } from "./components/products/Producten"

import {  ShopInfo } from "./components/shopInfo/ShopInfo"
import {  Login } from "./components/login/Login"
import {  Signup } from "./components/login/Signup"


class App extends React.Component {
    render() {

        const store = createStore(
            (state = {}) => state,
            applyMiddleware(thunk)
        );

        return (

            <BrowserRouter>    
                <switch>
                    <Route path="/welcome" component={Landing} />
                    <Route exact path="/" component={Home} />
                    <Route path="/winkels" component={Winkels} />
                    <Route path="/boodschappen" component={Boodschappen} />
                    <Route path="/profiel" component={Profiel} />
                    <Route path="/winkelmandje" component={WinkelMandje} />
                    
                    <Route path="/winkel/:shopName" component={ShopInfo} />
                    <Route path="/winkell/:shopName/producten" component={Producten} />

                    <Route exact path="/login" component={Login} />
                        
                    <Route exact path="/signup" component={Signup} />
                </switch>
            </BrowserRouter>

            

        )
    }
}

render(<App />, document.getElementById('appContainer'));