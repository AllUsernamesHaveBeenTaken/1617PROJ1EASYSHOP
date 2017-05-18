/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header  from "../nav/Header"
import {Boodschap}  from "./Boodschap"


export class WinkelMandje extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
          winkelInfo: null,
          productInfo: null,
       
          shopFound: false,
          productFound:false
        
        }
       }
    componentDidMount(){
        if (localStorage.getItem("winkelmandje") !== null) {
           
            var winkelInfo = Array();
            var productInfo= Array();
            var shopString=''
            var productString=''
            var basciString ='filter[]=id,eq,'
            var winkelMandjes = JSON.parse(localStorage.getItem('winkelmandje'));
            for (var i = 0; i <= winkelMandjes.length - 1; i++) {
                
                if (i  != 0) {
                    shopString = shopString +'&'
                    productString = productString+'&'
                } 
                shopString = shopString + basciString + winkelMandjes[i]['WinkelId']
                for (var z= 0 ; z <= winkelMandjes[i]['Boodschappen'].length- 1; z++) {

                    if (z  != 0) {
                        productString = productString+'&'
                    } 
                   
                    productString = productString + basciString + winkelMandjes[i]['Boodschappen'][z]['ProductId']
                }
                
            }
            console.log(shopString)
            console.log(productString)
            axios.defaults.withCredentials = true;
                
            axios.get('http://api.easy-shop.xyz/shops?'+shopString+'&csrf='+ localStorage.getItem('jwtToken') ).then((response) => {
                
                //  this.state.shopFound = true;
                // winkelInfo.push({shopName:response.data.name,shopId:response.data.id});
                
        
                // this.state.winkelInfo = winkelInfo;  
                console.log(response)
               
                axios.defaults.withCredentials = true;
            
                axios.get('http://api.easy-shop.xyz/products?'+productString+'&csrf='+ localStorage.getItem('jwtToken') ).then((response) => {
                    // this.state.productFound = true;
                 

                    // productInfo.push({productName: response.data.name,productId:response.data.id,productImg:response.data.imageName})
                   
                    // this.state.productInfo=productInfo;  
                   
                    // this.forceUpdate()  
                    console.log(response)
                    
                    
                     
                })
                .catch(function (error) {
                    console.log(error);
                });


                
                    

            })
            .catch(function (error) {
                console.log(error);
            });
       
           
            
            
        }
         
    }
    render() {
        var productInfo = this.state.productInfo
        var productFound = this.state.productFound

        return (
            <div>
                <Header/>
                <div className='wrapper'>
                     {
                            this.state.shopFound ?
                                this.state.winkelInfo.map(function(link,i) {
                                    return  <Boodschap key={link['shopId']} productFound={productFound} productInfo={productInfo} arrayIndex= {i} shopName= {link['shopName']} />
            
                                })
                            :
                            <p>no shopCardFound</p>
                            
                        

                       }
                	


                </div>

                
            </div>
        )
    }
}