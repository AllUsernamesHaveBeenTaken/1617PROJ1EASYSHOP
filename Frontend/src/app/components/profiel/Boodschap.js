/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';
import {css} from 'glamor';
import axios from 'axios';

import Header  from "../nav/Header"
import {BoodschapDetail} from "./BoodschapDetail"

let StyledLeft = css({
    float:'left',
    width:'50%'
})

let StyledRight = css({
    float:'left',
    width:'50%'
})
let StyledContainer = css ({
    float:'left',
    width:'94%',
    marginLeft:'3%'
})
let StyledOrder = css({

    textDecoration:'none',
    border:'solid',
    borderWidth:'1px',
    padding:'5px 10px',
    color:'#000',

})
let StyledPay = css ({

    textDecoration:'none',
     padding:'6px 10px',
    color:'#fff',
    backgroundColor: '#000'
})
let buttonContainer = css({
    float:'left',
    width: '50%',
    marginTop: '20px',
    textAlign: 'center'
})
let StyledDetaileContainer = css ({
    float: 'left',
    width:'100%'
})
export class Boodschap extends React.Component {
     constructor(props) {
        super(props);

        this.state = {
            isHidden: true,
            price: 0
        }
         this.toggleShow = this.toggleShow.bind(this);

    }

    toggleShow() {
         this.state.isHidden ?
             this.setState({isHidden: false}) :
             this.setState({isHidden: true});
    };
    
    componentDidMount(){
        axios.defaults.withCredentials = true;
        axios.get('http://api.easy-shop.xyz/orders_has_products?filter=orders_id,eq,'+ this.props.id +'&csrf='+ localStorage.getItem('jwtToken') ).then((response) => {
            var price = 0;
            console.log(response)
             response.data.orders_has_products.records.forEach(function(e){
                console.log(e)
                axios.get('http://api.easy-shop.xyz/products/'+ e[1]+'?csrf='+ localStorage.getItem('jwtToken') ).then((response) => {
                    console.log(response.data.price*e[2])
                    price = price + response.data.price*e[2]
                    this.setState({ price: price})
                    console.log('prijs');
                    console.log(this.state.price)

                })
            }.bind(this));

        })
        .catch((error) => {console.log(error)});

    }
    pay(){
         axios({
                    method: 'put',
                    url: 'http://api.easy-shop.xyz/orders/'+this.props.id+'?csrf='+ localStorage.getItem('jwtToken') ,
                    data: {
                        paid: '1'
                    },
                    
                    }).then((response) => {window.location = 'http://payment.easy-shop.xyz/payment.php?amount='+this.state.price})
                    .catch((error) => {console.log(error)});
}
   render() {
        return (
            <div>
                <div className='clearfix'>
                    {
                        this.props.what == 'order' ?
                            <div {...StyledContainer}>

                                <div {...StyledLeft}>
                                    <h3>Winkel name<span>Date: {this.props.expDate}</span></h3>
                                    <p>Exp date: {this.props.expDate}</p>
                                    <p>Status: <span>{this.props.status == 0 ? 'Order taken' : 'Order in wait'}</span></p>
                                </div>
                                <div {...StyledRight} className='clearfix'>
                                    <div {...buttonContainer}>
                                        <a  {...StyledOrder} onClick={this.toggleShow}>
                                            {
                                                this.state.isHidden == true ? 'View order': 'Hide order'
                                            }
                                        </a>
                                    </div>
                                    <div {...buttonContainer}>
                                        {this.props.paid == 0 ? <a  {...StyledPay} onClick={this.pay.bind(this)} href='#'>Pay</a> : ''}
                                    </div>

                                </div>
                                <div {...StyledDetaileContainer}>
                                </div>
                                {
                                    this.state.isHidden == true ? '': <BoodschapDetail id={this.props.id} />
                                }

                            </div>
                            :
                            <div {...StyledContainer}>

                                <div {...StyledLeft}>
                                    <h3>Winkel name </h3>
                                    <p>Exp date: {this.props.Date}</p>
                                </div>
                                <div {...StyledRight} className='clearfix'>
                                    <div {...buttonContainer}>
                                        <a  {...StyledOrder} onClick={this.toggleShow}>
                                            {
                                                this.state.isHidden == true ? 'View order': 'Hide order'
                                            }
                                        </a>
                                    </div>
                                    <div {...buttonContainer}>
                                        <a  {...StyledPay} href='#'>Delivered</a>
                                    </div>

                                </div>
                                <div {...StyledDetaileContainer}>
                                </div>
                                {
                                    this.state.isHidden == true ? '': <BoodschapDetail id={this.props.id} />
                                }

                            </div>
                    }

                </div>


            </div>
        )
    }
}