/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';
import {css} from 'glamor';
import axios from 'axios';

import {BoodschapProduct} from "./BoodschapProduct"

let StyledImg = css({
    height: '170px',
    width: '95%',
    marginRight: '5%',
    float: 'right',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    backgroundSize: 'contain',
})
let StyledLeft = css ({
    float:'left',
    width: '50%'
})
let StyledRight = css ({
    float:'left',
    width: '50%'
})
let StyledPoductContainer = css ({
    float:'left',
    width: '33.33%'
})
let StyledDelete = css({
    textDecoration:'none',
    color: '#000',
    backgroundColor: '#fff',
    padding: '5px 5px',
    float: 'left',
    border:'solid',
    borderWidth:'1px'
})

export class BoodschapDetail extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            orderId: this.props.id,
            productId: '',
            amount: '',
            productsFound: false,
            products: []
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        axios.defaults.withCredentials = true;
        axios.get('http://api.easy-shop.xyz/api.php/orders_has_products?filter=orders_id,eq,'+this.state.orderId+'&csrf='+ localStorage.getItem('jwtToken')).then((response) => {
            this.setState({productsFound:true});
            this.setState({products:response.data.orders_has_products.records});
            console.log(this.state.products)
        })
            .catch(function (error) {
                console.log(error);
            });
    };

    render(){
        return(
            <div>
                <section className="wrapper">
                    {
                        this.state.productsFound ?
                            this.state.products.map(function(link,i) {
                                return  <BoodschapProduct key={i} amount={link[2]} prId={link[1]} />

                            })
                            :
                            <p>no products found</p>
                    }
                </section>
            </div>
        )
    }
}