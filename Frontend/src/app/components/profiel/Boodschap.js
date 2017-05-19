/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';
import {css} from 'glamor';

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
     componentDidMount() {
       
    }
    render() {
        return (
            <div>
                <div className='clearfix'>
                    <div {...StyledContainer}>
                        <div {...StyledLeft}>
                            <h3>Winkel name <span>Date</span></h3>
                            <p>EX DATE</p>
                            <p>Status: <span>Order taken</span></p>
                        </div>
                        <div {...StyledRight} className='clearfix'>
                            <div {...buttonContainer}>
                                   <a  {...StyledOrder} href='#'>View order</a>
                            </div>
                            <div {...buttonContainer}>
                                 <a  {...StyledPay}href='#'>Pay</a>
                            </div>
                           
                        </div>
                        <div {...StyledDetaileContainer}>
                            <BoodschapDetail/>
                        </div>
                        
                    </div>
                </div>
                
                
            </div>
        )
    }
}