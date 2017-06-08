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
                 hi
                
            </div>
        )
    }
}