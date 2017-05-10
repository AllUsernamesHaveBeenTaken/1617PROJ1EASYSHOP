/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';
import { Filter } from "./Filter"
import { css } from 'glamor';
import axios from 'axios';

import Header  from "../nav/Header"

import {ProductInfo}  from "./ProductInfo"
import {Banner}  from "../winkels/Banner.js"

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
    
    constructor(props) {
	    super(props);
	    
	    this.state = {
	      jsonReturnedValue: null,
	      productFound: false
	    }
	    this.componentDidMount = this.componentDidMount.bind(this);
	  }

	    componentDidMount() {
	       axios.get('http://api.easy-shop.xyz/api.php/products?filter=shops_id,eq,'+this.props.match.params.shopId ).then((response) => {
	            this.setState({ jsonReturnedValue: response.data.products.records})
	            this.setState({ productFound: true})
	            
	

	      
	            })
	          .catch(function (error) {
	            console.log(error);
	        });

	    }
    render() {
    	
        return (
            <div>
                <Header/>
              	<Banner/>
                <section className='wrapper clearfix'>
                	<div{...StyledFilter}>
						<Filter/>
	                </div>
	                <div{...styledInfoContainer}>
	                	{
                            this.state.productFound ?
                                this.state.jsonReturnedValue.map(function(link) {
                                    return <div key={link[0]} {...styledInfo}> <ProductInfo price={link[2]} name={link[1]} description= {link[6]} price_per_kg={link[7]} image={link[8]} /> </div>
            
                                })
                            :
                            <p>no shops found</p>
                            
                        

                       }
	                	
	                	
	                </div>
                
                </section>
                
               
               	
            </div>
        )
    }
}