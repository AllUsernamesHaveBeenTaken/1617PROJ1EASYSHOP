/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';
import { Filter } from "./Filter"
import { css } from 'glamor';

import Header  from "../nav/Header"

import {ProductInfo}  from "./ProductInfo"
let StyledBannercontainer = css({
	height: '300px',
	backgroundColor: '#D6D6D6',
	marginBottom: '50px'
})
let StyledBanner = css({
	height: '280px',
	backgroundImage: 'url("/images/winkels/banner-colruyt.png")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: '50% 50%',
	backgroundSize: 'cover',
})
let StyledFilter = css ({
	float:'left',
	width: '100%',
	marginLeft:'0%',
	'@media(min-width: 550px)': {
       width: '18%',
       marginLeft:'2%',
	
	
    }
})
let styledInfoContainer = css ({
	float:'left',
	width: '100%',
	marginLeft:'0%',
	'@media(min-width: 550px)': {
       width: '78%',
       marginLeft:'2%'
	
	
    }
})
let styledInfo = css ({
	float:'left',
	width: '50%',
	'@media(min-width: 840px)': {
       width: '33.33%'
	
	
    }
    



})

export class Producten extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div {...StyledBannercontainer}>
                	<div {...StyledBanner}>
                		
                	</div>
                </div>
                <section className='wrapper clearfix'>
                	<div{...StyledFilter}>
						<Filter/>
	                </div>
	                <div{...styledInfoContainer}>
	                	<div{...styledInfo}>
	                		 <ProductInfo/>
	                	</div>
	                	<div{...styledInfo}>
	                		 <ProductInfo/>
	                	</div>
	                	<div{...styledInfo}>
	                		 <ProductInfo/>
	                	</div>
	                	<div{...styledInfo}>
	                		 <ProductInfo/>
	                	</div>
	                	<div{...styledInfo}>
	                		 <ProductInfo/>
	                	</div>
	                	<div{...styledInfo}>
	                		 <ProductInfo/>
	                	</div>
	                </div>
                
                </section>
                
               
               	
            </div>
        )
    }
}