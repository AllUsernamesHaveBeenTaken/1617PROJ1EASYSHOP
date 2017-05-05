/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';

import { css,before} from 'glamor';
import Header  from "../nav/Header"
import {ShopTitle } from "./ShopTitle"
let StyledPLace = before({
        display: 'inline-block',
        content: 'url("/images/icon/call.svg")',
        
 
        verticalAlign: '-50%'
},
css({

        width:'30%',
        float:'left'
})
)
export class ShopInfo extends React.Component {
	
    render() {
    	
        return (
        	<section>
               
        	   <Header/ >
                <ShopTitle/ >
                <Link to='/winkell/col/producten'>Start met winkelen</Link>
  
                <p {...StyledPLace} id='place'>Brusselsesteenweg 41, 9300 Aalst</p>

                <a href="https://colruyt.be">Colruyt.be</a>

                <p>053 77 20 87</p>

        	</section>
        	
        )
    }
}
 