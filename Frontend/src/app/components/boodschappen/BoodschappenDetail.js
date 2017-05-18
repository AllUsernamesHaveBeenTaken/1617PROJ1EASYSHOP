/**
 * Created by seppesnoeck on 18/05/17.
 */
import React from "react";
import axios from 'axios';

import Header  from "../nav/Header"
import {ShopTitle } from "../shopInfo/ShopTitle"
import {ShopHours } from "../shopInfo/ShopHours"
import {BoodschapProduct} from "./BoodschapProduct"


export class BoodschappenDetail extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            orderId: this.props.match.params.orderId,
            productId: '',
            amount: '',
            productsFound: null,
            productInfo: null
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        axios.defaults.withCredentials = true;
        axios.get('http://api.easy-shop.xyz/api.php/orders_has_products/'+this.state.orderId+'?csrf='+ localStorage.getItem('jwtToken')).then((response) => {

            this.setState({

                productId: response.data.products_id,
                amount: response.data.amount,
                productsFound: true,

            });
            axios.get('http://api.easy-shop.xyz/api.php/products/'+this.state.productId+'?csrf='+ localStorage.getItem('jwtToken')+'&filter=id,eq,'+this.state.productId).then((response) => {
                console.log(response.data);
                this.setState({
                    productInfo: response.data
                })

            })
                .catch(function (error) {
                    console.log(error);
                });

        })
            .catch(function (error) {
                console.log(error);
            });
        console.log(this.state.productInfo);
    }

    render(){
        return(
            <div>
                <Header/>
                <ShopTitle/>
                <ShopHours/>
                <div>
                    <h2>
                        <div>
                            <BoodschapProduct key={this.state.productInfo['id']} prName={this.state.productInfo['name']} prCount={this.state.amount}prImg={this.state.productInfo['imageName']} />
                        </div>
                    </h2>
                </div>
            </div>
        )
    }
}