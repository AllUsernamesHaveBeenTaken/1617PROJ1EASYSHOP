/**
 * Created by seppesnoeck on 18/05/17.
 */
import React from "react";
import axios from 'axios';
import {css} from 'glamor';

import Header  from "../nav/Header"
import {ShopTitle } from "../shopInfo/ShopTitle"
import {ShopHours } from "../shopInfo/ShopHours"
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
            productsFound: false,
            products: []
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        axios.defaults.withCredentials = true;
        axios.get('http://api.easy-shop.xyz/api.php/orders_has_products?filter=orders_id,eq,'+this.state.orderId+'&csrf='+ localStorage.getItem('jwtToken')).then((response) => {
            console.log(response)
       
            this.setState({productsFound:true});
            this.setState({products:response.data.orders_has_products.records});
            console.log(this.state.products)

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
                   
                })
                .then((response) => {
                    console.log(response);
                    axios({
                    method: 'put',
                    url: 'http://api.easy-shop.xyz/orders/'+this.props.match.params.orderId+'?csrf='+ localStorage.getItem('jwtToken')+'&filter=id,eq,'+this.props.match.params.orderId ,
                    data: {
                        available: '0'
                    },
                    
                    }).then((response => {window.location = "/boodschappen/overzicht";}))
                    .catch((error) => {console.log(error)});

                });
                
            })
                .catch((error) => {});
        }))


    }
    render(){
        return(
            <div>
                <Header/>
                <section className="wrapper">
                   
                        {
                            this.state.productsFound ?
                                this.state.products.map(function(link,i) {
                                    return  <BoodschapProduct key={i} amount={link[2]} prId={link[1]} />
           
                                })
                            :
                            <p>no products ound</p>
                           
                       
 
                       }
                       
         
                    <a  {...StyledDelete} href='#' onClick={this.doDelivery.bind(this)}>I'll deliver!</a>
                </section>

            </div>
        )
    }
}