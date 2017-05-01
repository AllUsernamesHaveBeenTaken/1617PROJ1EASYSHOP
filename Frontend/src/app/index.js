/**
 * Created by seppesnoeck on 1/03/17.
 */

import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';


import { Home } from "./components/home/Home"
import { Landing } from "./components/landing/Landing"
import { Winkels } from "./components/winkels/Winkels"
import {  Boodschappen } from "./components/boodschappen/Boodschappen"
import {  Profiel } from "./components/profiel/Profiel"
import {  WinkelMandje } from "./components/winkelmandje/WinkelMandje"
import {  Producten } from "./components/products/Producten"
import {  Login } from "./components/login/Login"
import {  Signup } from "./components/login/Signup"

class App extends React.Component { 
    render() {
        return (
            <BrowserRouter>    
                <switch>
                    <Route path="/welcome" component={Landing} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route path="/winkels" component={Winkels} />
                    <Route path="/boodschappen" component={Boodschappen} />
                    <Route path="/profiel" component={Profiel} />
                    <Route path="/winkelmandje" component={WinkelMandje} />

                    <Route path="/winkel/:shopName/producten" component={Producten} />
                </switch>
            </BrowserRouter>

        )
    }
}

render(<App />, document.getElementById('appContainer'));