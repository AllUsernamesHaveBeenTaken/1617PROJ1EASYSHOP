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

     componentDidMount() {
       
    }

    doPayment(){

    }
    render() {
        return (
            <div>
                <Header/>
                <ProfileHeader/>
                <div className="wrapper">
                    <UserInfo/>
                    <Title title='Boodschappen'/>
                    <Boodschap/>
                    <a href="app/payment.php?amount=14">Payment Post Test</a>
                </div>
            </div>
        )
    }
}