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
        }

    }

    componentWillMount() {
        /*axios.get('http://api.easy-shop.xyz/orders/?filter=applicant_id,eq,'+ localStorage.getItem('id') +'&csrf='+ localStorage.getItem('jwtToken') ).then((response) => {
            console.log(response);
            var shopString='';
            var basciString='filter[]=id,eq,';
            for (var i = 0; i <= response.data.orders.records.length - 1; i++) {
                if (i  != 0) {
                    shopString = shopString +'&'
                }
                shopString = shopString + basciString + response.data.orders.records[i][6]
            }
            axios.get('http://api.easy-shop.xyz/shops/?filter=id,eq,'+ shopString +'&satisfy=any&csrf='+ localStorage.getItem('jwtToken') ).then((response) => {
                console.log(response)
            }).catch((error) => {console.log(error)});
        }).catch((error) => {console.log(error)});*/
    }

    render() {
        return (
            <div>
                <div className='clearfix'>
                    <div {...StyledContainer}>
                        <div {...StyledLeft}>
                            <h3>Winkel name <span>Date: {this.props.expDate}</span></h3>
                            <p>Exp date: {this.props.expDate}</p>
                            <p>Status: <span>{this.props.status == 0 ? 'Order taken' : 'Order in wait'}</span></p>
                        </div>
                        <div {...StyledRight} className='clearfix'>
                            <div {...buttonContainer}>
                                   <Link  {...StyledOrder} to={"/profile/order/"+ this.props.id}>View order</Link>
                            </div>
                            <div {...buttonContainer}>
                                 <a  {...StyledPay}href='#'>Pay</a>
                            </div>

                        </div>
                        <div {...StyledDetaileContainer}>
                        </div>

                    </div>
                </div>


            </div>
        )
    }
}