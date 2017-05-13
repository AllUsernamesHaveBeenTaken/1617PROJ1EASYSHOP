/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';

import Header  from "../nav/Header"



export class Profiel extends React.Component {
     componentDidMount() {
        AsyncStorage.getItem("token").then((value) => {
            this.setState({"token": value});
        }).done();
    }
    render() {
        return (
            <div>
                <Header/>
                <p>{this.state.token}</p>
            </div>
        )
    }
}