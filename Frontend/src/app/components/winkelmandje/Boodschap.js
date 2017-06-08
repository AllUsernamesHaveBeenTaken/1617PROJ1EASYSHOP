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
            
            show:true
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
                creationDate: d,
                available:1,
                expiryDate: d,
                paid:0,
                addresses_id: response.data.addresses.records[0][0],
                applicant_id: localStorage.getItem('id'),
                shops_id: this.props.shopId
              },
              header: {'x-www-form-urlencoded':'rfc1738'}
            }).then((response) => {
                            
                console.log(response)
                console.log(  this.props.products)

                var data= [];
                 var array= JSON.parse(localStorage.getItem('winkelmandje'));
                 array.forEach(function(a,y) { 
                    
                    if (a.WinkelId== this.props.shopId) {
                        console.log(a.Boodschappen)
                        a.Boodschappen.forEach(function(element,i) { 
                    
                        data.push({
                            orders_id: response.data,
                            products_id: element.ProductId,
                            amount: element.Count
                        })




                    });
                    }
                    
                }.bind(this))
                console.log(data)

                     axios({
                      method: 'post',
                      url: 'http://api.easy-shop.xyz/orders_has_products?csrf='+ localStorage.getItem('jwtToken') ,
                      data: data,
                    
                        }).then((response) => {
                                
                    console.log(response)
                    var array= JSON.parse(localStorage.getItem('winkelmandje'));
                     array.forEach(function(a,y) { 
                        if (array[y].Boodschappen.length == 1) {
                            array.splice(y, 1)
                             localStorage.setItem('winkelmandje',JSON.stringify(array));
                             if(array.length == 0){
                                localStorage.removeItem("winkelmandje");
                                  this.hide()
                                  return
                             }
                              this.hide()
                                    

                        }
                        else if (a.WinkelId== this.props.shopId) {
                            console.log(a.Boodschappen)
                             array.splice(y, 1)
                              localStorage.setItem('winkelmandje',JSON.stringify(array));
                        }
                        
                    }.bind(this))
                    this.hide()
                })
                        .catch((error) => {console.log(error)});
                        


                   
                  
                
               
                

            })
            .catch((error) => {console.log(error)});

            })
        .catch((error) => {});
    }
    hide(){
        this.setState({ show: false})
    }
   
    render() {
   
        return (
            <div> 
                 {
                      this.state.show ?

                <div {...StyledContainer}className='clearfix'>
                    <h2 {...title}>{this.props.shopName}</h2>
                   
                    <div className='clearfix'{...StyledProduct}>
                        
                        {   


                           
                               this.props.products.map(function(link,i) {
                                    return  <BoodschapProduct key={link['prId']} hide={this.hide.bind(this)}prId={link['prId']} shopId={this.props.shopId} prName={link['prName']} prCount={link['prCount']}prImg={link['prImg']} />
            
                                }.bind(this))
                            
                            
                        

                       }
                       
                    </div>
                    
                    
                    
                    <div {...StyledButton}>
                    <a {...StyledBestellen} onClick={this.placeOrder.bind(this)} to='#'>Bestellen</a>
                    <Link  {...StyledWinkel}to={'/winkel/producten/' + this.props.shopId}>Terug naar winkel</Link>
                    </div>
                    
                </div>
                :
                <div></div>
                }
            </div>
        )
    }
}