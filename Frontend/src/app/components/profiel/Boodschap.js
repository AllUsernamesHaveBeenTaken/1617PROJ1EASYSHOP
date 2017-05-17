/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';
import {css} from 'glamor';

import Header  from "../nav/Header"

let StyledLeft = css({

})

let StyledRight = css({

})


export class Boodschap extends React.Component {
     componentDidMount() {
       
    }
    render() {
        return (
            <div>
                <div>
                    <div {...StyledLeft}>
                        <h3>Winkel name <span>Date</span></h3>
                        <p>EX DATE</p>
                        <p>Status: <span>Order taken</span></p>
                    </div>
                    <div {...StyledRight}>
                        <Link  to='/'>View order</Link>
                    </div>
                </div>
            </div>
        )
    }
}