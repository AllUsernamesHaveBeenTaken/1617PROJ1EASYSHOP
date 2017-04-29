/**
 * Created by seppesnoeck on 1/03/17.
 */

import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';


import { Home } from "./components/Home"
import { Landing } from "./components/Landing"
import { Winkels } from "./components/Winkels"
import {  Boodschappen } from "./components/Boodschappen"
import {  Profiel } from "./components/Profiel"
import {  WinkelMandje } from "./components/WinkelMandje"
import {  Producten } from "./components/Producten"

class App extends React.Component { 
    render() {
        return (
            <BrowserRouter>    
                <switch>
                    <Route path="/welcome" component={Landing} />
                    <Route exact path="/" component={Home} />
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