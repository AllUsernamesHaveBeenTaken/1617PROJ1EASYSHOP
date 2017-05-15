/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import axiosDefaults from 'axios/lib/defaults';
import { css } from 'glamor';

import Header  from "../nav/Header"
import { Filter } from "./Filter"
import { Winkel } from "./WinkelCard"


let styledFilter = css({
	float: 'left',
    width: '100%',
    '@media(min-width: 550px)': {
        float: 'left',
    	width: '25%',
    	margin: '0% 3%',
    }
})
let styledwinkelcontainer = css({
	float: 'left',
    width: '100%',
    '@media(min-width: 550px)': {
       float: 'left',
    	width: '63%',
    }

})
let styledDivTop = css({
	
	'@media(min-width: 550px)': {
       marginTop:'25px',
    }
})
export class Winkels extends React.Component {
    constructor(props) {
    super(props);
    
    this.state = {
      jsonReturnedValue: null,
      shopsFound: false
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }
    
    componentDidMount() { 
        axios.defaults.withCredentials = true;
        axios.get('http://api.easy-shop.xyz/shops?csrf='+ localStorage.getItem('jwtToken') ).then((response) => {
            this.setState({ jsonReturnedValue: response.data.shops.records})
            this.setState({ shopsFound: true})
            
          

      
            })
          .catch(function (error) {
            console.log(error);
        });

      
    }

    
    render() {
         

        return (
            <div>
                <Header/>
                <section className='wrapper'>
					<div {...styledDivTop}{...styledFilter}>
						<Filter />
	                </div>
				
					<div {...styledDivTop} {...styledwinkelcontainer}>
					   {
                            this.state.shopsFound ?
                                this.state.jsonReturnedValue.map(function(link) {
                                    return  <Winkel key={link[0]} logo={link[10]} id={link[0]} address={link[2]}shopName= {link[1]} />
            
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