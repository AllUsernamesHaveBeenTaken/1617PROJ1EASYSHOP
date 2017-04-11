/**
 * Created by seppesnoeck on 1/03/17.
 */

import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import { Home } from "./components/Home"
import { Landing } from "./components/Landing"
import { Winkels } from "./components/Winkels"

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <switch>
                    <Route path="/welcome" component={Landing} />
                    <Route exact path="/" component={Home} />
                    <Route path="/winkels" component={Winkels} />
                </switch>
            </BrowserRouter>

        )
    }
}

render(<App />, document.getElementById('appContainer'));