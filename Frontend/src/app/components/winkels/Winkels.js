/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';

import Header  from "../nav/Header"
import { Filter } from "./Filter"
import { Winkel } from "./WinkelCard"


export class Winkels extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Filter/>
            </div>
        )
    }
}