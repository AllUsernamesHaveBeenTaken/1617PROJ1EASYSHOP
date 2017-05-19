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
    width: '50%',
    padding:'10px'
})
let StyledRight = css ({
    float:'left',
    width: '50%'
})
let StyledPoductContainer = css ({
    float:'left',
    width: '77%',
    border: 'solid 1px',
    marginLeft: '50px'
})

export class BoodschapProduct extends React.Component {
     componentDidMount() {
       
    }
    render() {
        return (
            <div>
                 <div {...StyledPoductContainer}>
                        <div {...StyledLeft}>
                            <h3>{this.props.prName}</h3>
                             <p>Aantal: <span>{this.props.prCount}</span></p>
                        </div>
                        <div {...StyledRight}>
                                                    <div {...StyledImg} {...css({backgroundImage: 'URL("/images/producten/'+this.props.prImg+'") '})}></div>
                        </div>
                </div>
                
            </div>
        )
    }
}