/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';

import Header  from "./Header"

import {ProductInfo}  from "./ProductInfo"


export class Producten extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <ProductInfo/>
               	
            </div>
        )
    }
}