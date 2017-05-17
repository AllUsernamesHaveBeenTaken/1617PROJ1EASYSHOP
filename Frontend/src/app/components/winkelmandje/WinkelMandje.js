/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';

import Header  from "../nav/Header"
import {Boodschap}  from "./Boodschap"


export class WinkelMandje extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className='wrapper'>
                	<Boodschap/>
                	
                </div>

                
            </div>
        )
    }
}