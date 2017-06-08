/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import axiosDefaults from 'axios/lib/defaults';
import { css } from 'glamor';

import Header  from "../nav/Header"
import { Boodschap } from "./BoodschapCard"


let styledFilter = css({
    float: 'left',
    width: '100%',
    '@media(min-width: 550px)': {
        float: 'left',
        width: '25%',
        margin: '0% 3%',
    }
})
let styledwinkelcontainer = css({
    float: 'left',
    width: '100%',
    '@media(min-width: 550px)': {
        float: 'left',
        width: '63%',
    }

})
let styledDivTop = css({

    '@media(min-width: 550px)': {
        marginTop:'25px',
    }
})


export class Boodschappen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            orderInfo: null,
            winkelInfo: null,
            ordersFound: false,
            shopsFound: false,
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        var orderInfo = Array();

        axios.defaults.withCredentials = true;
        axios.get('http://api.easy-shop.xyz/orders?order[]=id,desc&csrf='+ localStorage.getItem('jwtToken') )
            .then((response) => {
            response.data.orders.records.forEach(function(e){
                orderInfo.push({orderId: e[0], completed: e[2], available: e[3], shopId:e[8], shopName:null, shopAddress:null, dateAdded: e[1]})
                });
                this.setState({ ordersFound: true})
                 axios.get('http://api.easy-shop.xyz/shops?csrf='+ localStorage.getItem('jwtToken') ).then((response) => {
            response.data.shops.records.forEach(function(s){
                orderInfo.forEach(function(o){
                    if (o['shopId'] == s[0]){
                        o.shopName = s[1];
                        o.shopAddress = s[2];
                    }
                })

            });



            this.setState({ shopsFound: true})
        })
            .catch(function (error) {
                console.log(error);
            });
            })
            .catch(function (error) {
                console.log(error);
            });
       
        this.setState({orderInfo: orderInfo})
    }


    render() {
        return (
            <div>
                <Header/>
                <section className='wrapper'>
                    <div {...styledDivTop} >
                        {
                            this.state.ordersFound ?
                                this.state.orderInfo
                                    .filter(link => {
                                        if (link['completed'] == 0 &&
                                        link['available'] == 1){
                                            return link;
                                        }
                                    })
                                    .map(function(link) {
                                        return  <Boodschap key={link['orderId']} id={link['orderId']} address={link['shopAddress']} shopName={link['shopName']} dateAdded={link['dateAdded']}/>
                                    })
                                :
                                <p>no orders found</p>
                        }
                    </div>
                </section>
            </div>
        )
    }
}