/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';
import {css} from 'glamor';

import Header  from "../nav/Header"

import {BoodschapProduct} from "./BoodschapProduct"



let title = css({
    borderBottom: 'solid',
    width: '100%',
    borderWidth: '1px',
    marginBottom: ' 20px',
    borderColor:'rgba(134, 139, 141, 0.42)',
})
let StyledProduct = css({
    float: 'left',
    width:'100%'
})
let StyledWinkel = css ({
    textDecoration: 'none',
    color: '#000',
    padding: '9px 5px',
    border: 'solid',
    borderWidth:'1px',
    marginLeft:'10px'

})
let StyledBestellen = css({
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#000',
     padding: '10px 20px',

})
let StyledButton = css ({
    marginTop: '25px',
    float: 'left'
})
let StyledContainer = css({
    width: '96%',
    marginLeft:'2%',
    marginTop: '20px'
})
export class Boodschap extends React.Component {
    constructor(props) {

        super(props);
      
        this.state = {
            
        
        }
    }
     componentDidMount() {

        
       
    }
    render() {
   
        return (
            <div> 
                <div {...StyledContainer}className='clearfix'>
                    <h2 {...title}>{this.props.shopName}</h2>
                   
                    <div className='clearfix'{...StyledProduct}>
                        
                        {   


                           
                               this.props.products.map(function(link,i) {
                                    return  <BoodschapProduct key={link['prId']} prName={link['prName']} prCount={link['prCount']}prImg={link['prImg']} />
            
                                })
                            
                            
                        

                       }
                       
                    </div>
                    
                    
                    
                    <div {...StyledButton}>
                    <a {...StyledBestellen} to='/'>Bestellen</a>
                    <Link  {...StyledWinkel}to={'/winkel/producten/' + this.props.shopId}>Terug naar winkel</Link>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}