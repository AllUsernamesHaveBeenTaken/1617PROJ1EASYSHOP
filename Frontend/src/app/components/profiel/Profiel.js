/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

import Header  from "../nav/Header"
import {UserInfo}  from "./UserInfo"
import {Title}  from "./Title"
import {Boodschap}  from "./Boodschap"
import {ProfileHeader}  from "./ProfileHeader"




export class Profiel extends React.Component {
    constructor(props) {

        super(props);
      
        this.state = {
            
            userName:'',
            useremail: '',
            useradress:'',
            credentials_id:null,
            userImg:''
        }
    }
    componentWillMount() {
       axios.defaults.withCredentials = true;
        axios.get('http://api.easy-shop.xyz/users/'+ localStorage.getItem('id') +'?csrf='+ localStorage.getItem('jwtToken') ).then((response) => {
              this.setState({
                userName:response.data.firstname + ' ' +  response.data.lastname,
                credentials_id: response.data.credentials_id,
                userImg: response.data.imageName
              })
             
            axios.get('http://api.easy-shop.xyz/addresses/?filter=users_id,eq,'+ localStorage.getItem('id') +'&csrf='+ localStorage.getItem('jwtToken') ).then((response) => {
            var arg =response.data.addresses.records[0];
            this.setState({
                useradress: arg[1] + ' ' +arg[2] + ' '+arg[3]
            })
                axios.get('http://api.easy-shop.xyz/credentials/?filter=id,eq,'+ this.state.credentials_id +'&csrf='+ localStorage.getItem('jwtToken') ).then((response) => {
                    
                    this.setState({
                        useremail: response.data.credentials.records[0][5]
                    })
                })
                .catch((error) => {console.log(error)});
            })
            .catch((error) => {console.log(error)});
            
        })
        .catch((error) => {console.log(error)});

    }
    componentDidMount(){

    }    
    doPayment(){

    }
    render() {
        return (
            <div>
                <Header/>
                
                <div className="wrapper">
                    <UserInfo email= {this.state.useremail} name={this.state.userName} address={this.state.useradress}/>
                    <Title title='Boodschappen'/>
                    <Boodschap/>
                    
                </div>
            </div>
        )
    }
}