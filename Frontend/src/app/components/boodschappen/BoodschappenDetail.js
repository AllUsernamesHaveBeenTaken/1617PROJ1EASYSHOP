/**
 * Created by seppesnoeck on 18/05/17.
 */
import React from "react";
import axios from 'axios';

import Header  from "../nav/Header"
import {ShopTitle } from "../shopInfo/ShopTitle"
import {ShopHours } from "../shopInfo/ShopHours"

export class BoodschappenDetail extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            orderId: this.props.match.params.orderId,
            orders_has_products: null,
            productsFound: null
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        axios.defaults.withCredentials = true;
        axios.get('http://api.easy-shop.xyz/api.php/orders_has_products/'+this.state.orderId+'?csrf='+ localStorage.getItem('jwtToken')).then((response) => {
            this.setState({ orders_has_products: response.data});
            this.setState({ productsFound: true})

        })
            .catch(function (error) {
                console.log(error);
            });
        axios.get('http://api.easy-shop.xyz/api.php/products/'+this.state.orders_has_products['products_id']+'?csrf='+ localStorage.getItem('jwtToken') ).then((response) => {


        })
            .catch(function (error) {
                console.log(error);
            });

    }

    render(){
        return(
            <div>
                <Header/>
                <ShopTitle/>
                <ShopHours/>

            </div>
        )
    }
}