/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';

import { css } from 'glamor';

let styledcontainer = css ({
	


})
let styledcount = css({
	width:'50px',
	float:'left',
	padding: '5px 6px',
	border:'solid',
	borderWidth:'1px',
	fontSize:'15px',
})
let styledMinPlus = css ({
	width:'20px',
	float:'left',
	padding: '5px 8px',
	border: 'solid',
	borderLeft: 'none',
	borderWidth:'1px'
})
let styledMinPlusLink = css ({
	textDecoration: 'none',
	padding: '5px 0px',
})
let StyledSection = css ({
	display: 'flex',
  	alignItems: 'center',
  justifyContent: 'center',
  width:'100%'
})
export class AddCount extends React.Component {
	constructor() {
	    super();
	    this.state = {
	      Count: 0,
	    };
  	}
  	countUp(){
  		this.state.Count++;
  	
  	}
  	countDown(){
  		if (this.state.Count > 0) {
			this.state.Count--;
  		} 
  		 		
  	}
    render() {
    	
        return (
        	<section {...StyledSection}>
        		<div {...styledcontainer} className='clearfix'>
					<div {...styledcount}>
						<p>{this.state.Count}</p>
					</div>
					<div {...styledMinPlus}>
						<a {...styledMinPlusLink} onClick={this.countDown.bind(this)}  href='#'>-</a>
					</div>
					<div {...styledMinPlus}>
						<a {...styledMinPlusLink} onClick={this.countUp.bind(this)} href='#'>+</a>
					</div>
        		</div>
        	</section>
        	
        )
    }
}
 