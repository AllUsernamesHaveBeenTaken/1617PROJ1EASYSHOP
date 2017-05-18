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
            
            axios.defaults.withCredentials = true;
                
            axios.get('http://api.easy-shop.xyz/shops?'+shopString+'&satisfy=any&csrf='+ localStorage.getItem('jwtToken') ).then((response) => {
                
                
                response.data.shops.records.forEach(function(e) {
               
                    winkelInfo.push({shopName:e[1],shopId:e[0],products:[]} );
                });

               
                axios.defaults.withCredentials = true;
            
                axios.get('http://api.easy-shop.xyz/products?'+productString+'&satisfy=any&csrf='+ localStorage.getItem('jwtToken') ).then((response) => {
                    

                   response.data.products.records.forEach(function(a) {
                         
                        winkelInfo.forEach(function(e) {
                            
                           
                            if (a[5] == e['shopId']) {
                        
                                e.products.push({prImg:a[8],prId:a[0],prName:a[1]})

                            }
                        });
                    });


               
                     this.state.winkelInfo = winkelInfo;  
                   this.state.shopFound = true;
                    this.forceUpdate()  
                  
                    
                    
                     
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
                                    return  <Boodschap key={link['shopId']} shopName={link['shopName']} products={link['products']} />
            
                                })
                            :
                            <p>no shopCardFound</p>
                            
                        

                       }
                	


                </div>

                
            </div>
        )
    }
}