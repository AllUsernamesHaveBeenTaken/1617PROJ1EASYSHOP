/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';
import {css} from 'glamor';

import Header  from "../nav/Header"

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

export class BoodschapProduct extends React.Component {
     componentDidMount() {
       console.log(this)
    }
    render() {
        return (
            <div>
                 <div {...StyledPoductContainer}>
                        <div {...StyledLeft}>
                            <h3>Product name</h3>
                             <p>Aantal: <span>2</span></p>
                            <a href="#">Delete</a> 
                        </div>
                        <div {...StyledRight}>
                           
                            <div {...StyledImg} {...css({backgroundImage: 'URL("/images/producten/image1.png") '})}></div>
                        </div>
                </div>
                
            </div>
        )
    }
}