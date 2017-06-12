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
            isHidden: true
        }
         this.toggleShow = this.toggleShow.bind(this);

    }

    toggleShow() {
         this.state.isHidden ?
             this.setState({isHidden: false}) :
             this.setState({isHidden: true});
    };


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
                                        <a  {...StyledPay} href='http://payment.easy-shop.xyz/payment.php?amount=25'>Pay</a>
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