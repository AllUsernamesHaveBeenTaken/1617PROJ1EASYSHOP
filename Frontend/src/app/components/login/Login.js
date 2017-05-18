/**
 * Created by seppesnoeck on 1/03/17.
 */
import React , { Component }from "react";

import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom' 
import Validation from 'react-validation';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import { css,before} from 'glamor';
import axios from 'axios';

import './../../extend';


let StyledContainer = css ({
    display: 'flex',
   alignItems: 'center',
  width:'100%',
   height: '100vh',
   backgroundImage: 'url(../images/login.png)',
    position: 'relative',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
 

})
let StyledLoginTitle = css({
    width:'100%',
    textAlign: 'center',
    fontSize:' 20px',
})
let StyledForm = css({
      width:'40%',
      marginLeft:'30%',
       backgroundColor: 'rgba(255,255,255,0.64)',
       padding:'20px',
})
let StyledInput = css ({
    padding: '5px 10px',
    fontSize:'15px',
    width: '100%',
    border: 'solid',
    borderWidth: '1px'
})
let StyledButton = css({
    backgroundColor: '#000',
    color:'#fff',
    WebkitAppearance: 'none',
    border:'none',
    fontSize:'15px',
    padding: '5px 10px',
    ':disabled':{
        opacity: '0.75',
        cursor: 'not-allowed'
    }
})
let StyledLabel = css({
    fontSize:'15px',
    
})
let StyledLabelContainer = css({
    marginBottom: '20px'
})

export class Login extends React.Component {
    constructor(props,context) {
        super(props,context);
   
        this.state = {
            errors: {}
        };
    }

    

    handleSubmit(event) {
        console.log(this);
            var email = this.form.components.email.state.value;
            var pass = this.form.components.password.state.value;
            event.preventDefault();
             axios.defaults.withCredentials = true;
             axios.post('https://api.easy-shop.xyz/login_token.php', {username: email,password: pass,withCredentials:true})
             .then((response) => {
               
               axios.post('https://api.easy-shop.xyz/api.php', {token:response.data,withCredentials:true}).then((response) => {
               
                    localStorage.setItem('jwtToken', response.data);
                    axios.defaults.withCredentials = true;
                    axios.get('http://api.easy-shop.xyz/credentials?csrf='+ localStorage.getItem('jwtToken')+'&filter=email,eq,'+email ).then((response) => {
                        
                         axios.get('http://api.easy-shop.xyz/users?csrf='+ localStorage.getItem('jwtToken')+'&filter=credentials_id,eq,'+response.data.credentials.records[0][0] ).then((response) => {
                            
                          
                             localStorage.setItem('id', response.data.users.records[0][0]);
                             this.props.login()

                        })
                        .catch((error) => {});


                    })
                    .catch((error) => {});
                
                })
                .catch(function (error) {
                console.log(error);
                });
            })
            .catch((error) => { 
                 console.log(error);
                this.form.showError('email','email');
                this.form.showError('password','password');
               
            })
        };


    render() {

              
       
        return (
           <section >
            <div {...StyledContainer}>
                 <Validation.components.Form  {...StyledForm} ref={c => this.form = c} onSubmit={this.handleSubmit.bind(this)}>
            <h3 {...StyledLoginTitle}>Login</h3>
            <div {...StyledLabelContainer}>
                <label {...StyledLabel}>
                    Email*
                    <Validation.components.Input {...StyledInput} value='admin' name='email' validations={['required']}/>
                </label>
            </div>
            <div{...StyledLabelContainer} >
                <label {...StyledLabel}>
                    Password*
                    <Validation.components.Input {...StyledInput} type='password' value='Azerty123' name='password' validations={['required']}/>
                </label>
            </div>
            <div>
                <Validation.components.Button {...StyledButton}>Submit</Validation.components.Button>
            </div>
        </Validation.components.Form>
            </div>
            </section>
            
        )
    }
}



