/**
 * Created by seppesnoeck on 1/03/17.
 */

import React from 'react';
import { render } from 'react-dom';

import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { Landing } from "./components/Landing"

class App extends React.Component {
    render() {
        return (
            <Landing />
        )
    }
}

render(<App />, document.getElementById('appContainer'));