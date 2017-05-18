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
	    console.log(this);
	    this.state = {
	      jsonReturnedValue: null,
	      productFound: false,
	      shopId: this.props.match.params.shopId,

            product: '',
            stews: '0'

	    }
	    this.componentDidMount = this.componentDidMount.bind(this);
	  }

	    componentDidMount() {
	    	 axios.defaults.withCredentials = true;
	       axios.get('http://api.easy-shop.xyz/api.php/products?csrf='+ localStorage.getItem('jwtToken')+'&filter=shops_id,eq,'+this.state.shopId ).then((response) => {
	            this.setState({ jsonReturnedValue: response.data.products.records})
	            this.setState({ productFound: true})
                
	            })
	          .catch(function (error) {
	            console.log(error);
	        });
	    }
    onChangeSearchable(newProduct, newStew ) {
        this.setState({
            product: newProduct,
            stews: newStew
        });
    }
    render() {
    	const shopId = this.state.shopId;
        return (
            <div>
                <Header/>
                <Banner/>
                <section className='wrapper clearfix'>
                    <div{...StyledFilter}>
                        <Filter changeSearchable={this.onChangeSearchable.bind(this)}/>
                    </div>
                    <div{...styledInfoContainer}>
                        {
                            this.state.productFound ?
                                this.state.jsonReturnedValue
                                    .filter(link => {
                                        if (link[1].toLowerCase().indexOf(this.state.product.toLocaleLowerCase()) >= 0 ||
                                            link[1].toLowerCase().indexOf(this.state.product.toLocaleLowerCase()) >= 0
                                        ){
                                            
                                            return link;
                                        }
                                    })
                                    .map(function(link) {
                                    return <div key={link[0]} {...styledInfo}> <ProductInfo shopId={link[5]} productId={link[0]} price={ link[2]} name={link[1]} description= {link[6]} price_per_kg={link[7]} image={link[8]} /> </div>
           
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