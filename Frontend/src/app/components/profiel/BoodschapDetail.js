/**
 * Created by seppesnoeck on 18/05/17.
 */
import React from "react";
import axios from 'axios';
import {css} from 'glamor';

import Header  from "../nav/Header"
import {BoodschapProduct} from "./BoodschapProduct"

let StyledDelete = css({
    fontSize: '20px',
    textDecoration:'none',
    color: '#fff',
    backgroundColor: '#000',
    padding: '10px',
    float: 'right',
    border:'solid',
    borderWidth:'1px',
    margin: '10px'
})


export class BoodschappenDetail extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            orderId: this.props.match.params.orderId,
            productId: '',
            amount: '',
            productsFound: null,
            productInfo: []
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
    };

    doDelivery() {
        var orderJSON;
        var addressJSON;
        axios.defaults.withCredentials = true;
        axios.get('http://api.easy-shop.xyz/orders/'+this.props.match.params.orderId+'?csrf='+ localStorage.getItem('jwtToken')+'&filter=id,eq,'+this.props.match.params.orderId).then((response => {
            orderJSON = response.data;
            axios.get('http://api.easy-shop.xyz/addresses?csrf='+ localStorage.getItem('jwtToken')+'&filter=users_id,eq,'+response.data.applicant_id ).then((response) =>{
                addressJSON = response.data.addresses.records[0];

                axios({
                    method: 'post',
                    url: 'http://api.easy-shop.xyz/deliveries?csrf='+ localStorage.getItem('jwtToken') ,
                    data: {
                        deliveryDate: new Date().getDay()+'-'+new Date().getMonth()+1+'-'+new Date().getFullYear()+ ' '+new Date().getHours()+ ':'+new Date().getMinutes()+':'+new Date().getSeconds(),
                        deliverer_id:localStorage.getItem('id'),
                        orders_id: this.props.match.params.orderId,
                        orders_addresses_id:addressJSON[1],
                        applicant_id: orderJSON['applicant_id'],
                        orders_shops_id: orderJSON['shops_id']
                    },
                    header: {'x-www-form-urlencoded':'rfc1738'}
                })
                    .then((response) => {

                    });
                axios({
                    method: 'put',
                    url: 'http://api.easy-shop.xyz/orders/'+this.props.match.params.orderId+'?csrf='+ localStorage.getItem('jwtToken')+'&filter=id,eq,'+this.props.match.params.orderId ,
                    data: {
                        available: '0'
                    },
                    header: {'x-www-form-urlencoded':'rfc1738'}
                })
                    .catch((error) => {console.log(error)});
            })
                .catch((error) => {});
        }))


    }
    render(){
        return(
            <div>
                <Header/>
                <section className="wrapper">
                    <h2>
                        <BoodschapProduct key={this.state.productInfo['id']} prName={this.state.productInfo['name']} prCount={this.state.amount}prImg={this.state.productInfo['imageName']} />
                    </h2>
                    <a  {...StyledDelete} onClick={this.doDelivery.bind(this)}>I'll deliver!</a>
                </section>

            </div>
        )
    }
}