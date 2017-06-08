/**
 * Created by seppesnoeck on 1/03/17.
 */

import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
// import { AsyncStorage } from 'react-native';

import { Home } from "./components/home/Home"
import { Landing } from "./components/landing/Landing"
import { Winkels } from "./components/winkels/Winkels"
import {  Boodschappen } from "./components/boodschappen/Boodschappen"
import {  BoodschappenDetail } from "./components/boodschappen/BoodschappenDetail"
import {  BoodschappenDetailProfiel } from "./components/profiel/BoodschapDetail"

import {  Profiel } from "./components/profiel/Profiel"
import {  WinkelMandje } from "./components/winkelmandje/WinkelMandje"
import {  Producten } from "./components/products/Producten"

import {  ShopInfo } from "./components/shopInfo/ShopInfo"
import {  Login } from "./components/login/Login"





class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loginFlag:'notset'
      };

       
    }

    componentWillMount(){

         axios.defaults.withCredentials = true;
             axios.get('http://api.easy-shop.xyz/products?csrf='+ localStorage.getItem('jwtToken') ).then((response) => {
                    

                   this.setLoginFlagTrue()
                  
                    
                    
                     
                })
                .catch((error) => {
                     this.setLoginFlagFalse()
                });

    }

    setLoginFlagTrue(arg){
        this.setState({loginFlag:'true'});
        this.forceUpdate()
    }
    setLoginFlagFalse(arg){
        this.setState({loginFlag:'false'});
        this.forceUpdate()
    }
    getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
    }
    render() {
  
      
        if (this.state.loginFlag== 'true') {
            return (
            
                <BrowserRouter>    
                    <switch>
                        
                        
                       <Route path="/welcome" component={Landing} />

                        <Route exact path="/" component={Profiel} />
                        <Route path="/profile/order/:orderId" component={BoodschappenDetailProfiel} />


                        <Route path="/winkels" component={Winkels} />
                        <Route path="/boodschappen/overzicht" component={Boodschappen} />
                        <Route path="/boodschappen/order/:orderId" component={BoodschappenDetail} />


                        <Route path="/winkelmandje" component={WinkelMandje} />
                        
                        <Route path="/winkel/info/:shopId" component={ShopInfo} />
                        <Route path="/winkel/producten/:shopId" component={Producten} />


                       
                            
                       
                    </switch>
                </BrowserRouter>

            

            )
        } 
        else if (this.state.loginFlag== 'notset') {
            return (
            
                <BrowserRouter>    
                    <switch>
                        
                        
                       
                        <Route exact path="/" render={() => (
                           <p>loading</p>
                        )} />

                       
                            
                       
                    </switch>
                </BrowserRouter>

            

            )
        } 
        else {
            return (
            
                <BrowserRouter>    
                    <switch>
                        

                        <Route  path="/" render={() => (
                            <Login login={this.setLoginFlagTrue.bind(this)} />
                        )} />
                            
                       
                    </switch>
                </BrowserRouter>

            

            )
        }
       
    }
}

render(<App />, document.getElementById('appContainer'));