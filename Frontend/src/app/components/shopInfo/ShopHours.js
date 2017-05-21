/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';

import { css, before } from 'glamor';

let StyledHours = css ({
    float:'left',
    marginLeft: '20px'
    
})
let StyledDays = css ({
    float:'left',


},


)
let StyledClock = css({
 float:'left'
},
before({
        display: 'inline-block',
        content: 'url("/images/icon/public.svg")',
        verticalAlign: '-9%'        
})
)

export class ShopHours extends React.Component {
	
    render() {
    	
        return (
        	<section>
               <div {...StyledClock}></div>
        	   <div {...StyledDays}>
                    <p>Maandag</p>
                    <p>Dinsdag</p>  
                    <p>Woensdag</p>  
                    <p>Donderdag</p>  
                    <p>Vrijdag</p>  
                    <p>Zaterdag</p>  
                    <p>Zondag</p>  

               </div>
               <div {...StyledHours}>
                    <p>08:30–20:00</p>
                    <p>08:30–20:00</p>
                    <p>08:30–20:00</p>
                    <p>08:30–20:00</p>
                    <p>08:30–20:00</p>
                    <p>08:30–20:00</p>
                    <p>closed</p>  
               </div>
        	</section>
        	
        )
    }
}
 