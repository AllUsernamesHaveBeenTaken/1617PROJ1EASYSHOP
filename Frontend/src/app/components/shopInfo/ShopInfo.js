/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';

import { css,before} from 'glamor';
import Header  from "../nav/Header"
import {ShopTitle } from "./ShopTitle"
import {ShopHours } from "./ShopHours"
import {Banner}  from "../winkels/Banner.js"
let StyledPLace = css({
        width:'100%',
        
},
before({

        
        display: 'inline-block',
        content: 'url("/images/icon/location.svg")',
        verticalAlign: '-9%'
})
)
let StyledWebsite = css({
    width:'100%',
    color:'#000',
    textDecoration:'none',
},
before({
        display: 'inline-block',
        content: 'url("/images/icon/public.svg")',
        verticalAlign: '-9%'        
})
)
let StyledCall = before({
        display: 'inline-block',
        content: 'url("/images/icon/call.svg")',
        verticalAlign: '-9%'
},
css({

        width:'30%',
        float:'left'
})
)
let StyledContainer = css({
    marginLeft: '5%'
})
let StyledButton = css ({
    textDecoration:'none',
    color: '#fff',
    backgroundColor: '#000',
    padding: '10px 10px',

})
let StyledButtonContainer = css ({
    float:'left',
    width:'100%',
    margin: '10px 0px'
})
let StyledShopHours = css({
    
}
)

export class ShopInfo extends React.Component {
	
    render() {
    	
        return (
        	<section>
               
        	   <Header/ >
               <Banner/>
               <div className='wrapper clearfix'>
                    <div {...StyledContainer}>
                        <ShopTitle/ >
                        <div {...StyledButtonContainer}>
                             <Link {...StyledButton}to='/winkell/col/producten'>Start met winkelen</Link>
                        </div>
                        
          
                        <p {...StyledPLace} id='place'>Brusselsesteenweg 41, 9300 Aalst</p>

                        <a {...StyledWebsite} href="https://colruyt.be">Colruyt.be</a>

                        <p {...StyledCall}>053 77 20 87</p>
                        <div {...StyledShopHours}><ShopHours/></div>
                    </div>
                    
               </div>
                

        	</section>
        	
        )
    }
}
 