/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';
import {css} from 'glamor';
import axios from 'axios';
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
     componentDidMount(a) {

        
       
    }
    placeOrder(){
         axios.defaults.withCredentials = true;
        axios.get('http://api.easy-shop.xyz/addresses?csrf='+ localStorage.getItem('jwtToken')+'&filter=users_id,eq,'+localStorage.getItem('id') ).then((response) => {
            var d = new Date();     
            axios({
              method: 'post',
              url: 'http://api.easy-shop.xyz/orders?csrf='+ localStorage.getItem('jwtToken') ,
              data: {
                creationDate: new Date().getDay()+'-'+new Date().getMonth()+1+'-'+new Date().getFullYear()+ ' '+new Date().getHours()+ ':'+new Date().getMinutes()+':'+new Date().getSeconds(),
                available:1,
                expiryDate: new Date().getDay()+'-'+new Date().getMonth()+1+'-'+new Date().getFullYear()+ ' '+new Date().getHours()+ ':'+new Date().getMinutes()+':'+new Date().getSeconds(),
                paid:0,
                addresses_id: response.data.addresses.records[0][0],
                applicant_id: localStorage.getItem('id'),
                shops_id: this.props.shopId
              },
              header: {'x-www-form-urlencoded':'rfc1738'}
            }).then((response) => {
                            

            })
            .catch((error) => {console.log(error)});

            })
        .catch((error) => {});
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
                    <a {...StyledBestellen} onClick={this.placeOrder.bind(this)} to='#'>Bestellen</a>
                    <Link  {...StyledWinkel}to={'/winkel/producten/' + this.props.shopId}>Terug naar winkel</Link>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}