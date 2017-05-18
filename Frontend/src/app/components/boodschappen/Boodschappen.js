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
            jsonReturnedValueBoodschappen: null,
            jsonReturnedValueShops: null,
            ordersFound: false,
            shopsFound: false,
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        axios.defaults.withCredentials = true;
        axios.get('http://api.easy-shop.xyz/orders?csrf='+ localStorage.getItem('jwtToken') ).then((response) => {
            this.setState({ jsonReturnedValueBoodschappen: response.data.orders.records})
            this.setState({ ordersFound: true})})
            .catch(function (error) {
                console.log(error);
            });
        axios.get('http://api.easy-shop.xyz/shops?csrf='+ localStorage.getItem('jwtToken') ).then((response) => {
            this.setState({ jsonReturnedValueShops: response.data.shops.records})
            this.setState({ shopsFound: true})})
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
        return (
            <div>
                <Header/>
                <section className='wrapper'>
                    <div {...styledDivTop} {...styledwinkelcontainer}>
                        {
                            this.state.ordersFound && this.state.shopsFound ?
                                this.state.jsonReturnedValueBoodschappen
                                    .filter(link => {
                                        if (link[2] == '0') {
                                            return link;
                                        }
                                    })
                                    .map(function(link) {
                                        return  <Boodschap key={link[0]} id={link[0]} address={link[6]} shopName={link[8]} />
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