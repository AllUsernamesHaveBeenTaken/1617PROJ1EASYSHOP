/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';
import {AddCount}  from "./AddCount"
import { css } from 'glamor';

let StyledImg = css({
	height: '170px',
	width: '35%',
	marginLeft: '5%',
	float: 'left',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: '50% 50%',
	backgroundSize: 'contain',
})
let StyledRight = css({
	float: 'left',
	width: '50%',
	marginLeft:'10%',
	height:'170px'
}) 
let StyledUnderLeft  = css({
	float:'left',
	width: '50%',
	height:'2px',
})
let StyledUnderRight = css({
	float:'left',
	width: '50%',


})
let StyledButton =css ({
	color: '#fff',
	backgroundColor: '#000',
	 padding: '10px 20px',
	 border: 'none'
})
let StyledBorder = css({
	borderBottom: 'solid',
	paddingBottom: '20px',
	borderWidth:'1px',
	borderColor:'rgba(134, 139, 141, 0.42)'
})
let StyledTitle = css({
	fontWeight: 'normal',
	fontSize: '20px',
	marginTop: '10px',
})
let StyledInfo = css({
	fontSize: '15px',
	marginTop: '16px',
	fontWeight:'lighter'
})

let StyledStuk = css({
	fontWeight: 'bold',
	fontSize: '16px',
})

let StyledDrop = css ({
	background: 'transparent',
   	border: 'none',
   	height: '29px',
   	border:'solid',
   	borderWidth:'1px',
   	borderColor:'#95989A',
   	borderRadius:'0px',
   	width: '40%',
   	':after':{
   		content:'"..."' , 
   		width: '10%',
    	height: '29',  
    	position: 'absolute', 
	    right: '10px', 
	    top: '0'    
    
   	},
})

export class ProductInfo extends React.Component {
	constructor() {
	    super();
	    this.state = {
	      Count: 1,
	    };
  	}
  	countUp(){
  		this.state.Count++;
  	
  	}
  	countDown(){
  		if (this.state.Count > 1) {
			this.state.Count--;
  		} 
  		 		
  	}
	handelAdd(event){
		//check winkelmand bestaat
		var arg = this
		if (localStorage.getItem("winkelmandje") === null) {
			console.log("maak nieuw winkelmandje")
  			var winkelmandje =[{WinkelId:this.props.shopId,Boodschappen: [{ProductId: arg.props.productId,Count: this.state.Count}]},]
  			localStorage.setItem('winkelmandje',JSON.stringify(winkelmandje));
			// console.log(JSON.parse(localStorage.getItem('winkelmandje'))[0]);
		}
		//if winkelmand bestaat
		else{
			var boodschappen=JSON.parse(localStorage.getItem('winkelmandje'))
			var boodschappen_copy= boodschappen;
			console.log('boodschappen 1')
			console.log(boodschappen)
			for (var i = 0; i <= boodschappen.length - 1; i++) {
				console.log('boodschappen 2')
				console.log(boodschappen)
				//check winkel id bestaat 
		
				//if true
				if (boodschappen[i]['WinkelId']== arg.props.shopId) {
				
					var notFound = true;
					console.log('winkelID')
					console.log(boodschappen[i]['WinkelId'])
					for (var x = 0; x <= boodschappen[i]['Boodschappen'].length - 1; x++) {
						console.log(boodschappen[i]['Boodschappen'][x]['ProductId']	)
						if (boodschappen[i]['Boodschappen'][x]['ProductId'] == arg.props.productId) {
							boodschappen_copy[i]['Boodschappen'][x]['Count']=this.state.Count;
							console.log("update winkelmandje")
							notFound= false;
					
						}
					}
					if (notFound) {
						console.log("add to winkelmandje")
						boodschappen_copy[i]['Boodschappen'].push({ProductId: arg.props.productId,Count: this.state.Count})
					}
					localStorage.setItem('winkelmandje',JSON.stringify(boodschappen_copy));
					 return;
					
					


				} 
				
				
					
  					
				
				
			}
			console.log('add new shop')
			boodschappen_copy.push({WinkelId:this.props.shopId,Boodschappen: [{ProductId: arg.props.productId,Count: this.state.Count}]})
			localStorage.setItem('winkelmandje',JSON.stringify(boodschappen_copy));
			
		
		}
		

	}
    render() {
    	
        return (
        	<div {...StyledBorder} className='clearfix'>
        		<div {...StyledImg} {...css({backgroundImage: 'URL("/images/producten/'+this.props.image+'") '})}></div>
        		<div {...StyledRight} >
        			<h2 {...StyledTitle}>{this.props.name}</h2>
        			<p {...StyledInfo}>{this.props.description}</p>
        			<p {...StyledInfo} {...StyledStuk} >€ {this.props.price}</p>
        			<p {...StyledInfo} >€ {this.props.price_per_kg}</p>
        		</div>
        		<div {...StyledUnderLeft}>
					
						<AddCount status={this.state.Count }add={this.countUp.bind(this)} min={this.countDown.bind(this)} />
			
        		</div>
        		<div {...StyledUnderRight} onClick={this.handelAdd.bind(this)}> <button {...StyledButton}>Voeg toe</button> </div>
            </div>
        )
    }
}
 