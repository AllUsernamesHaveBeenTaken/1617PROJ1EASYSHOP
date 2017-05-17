/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';

import Header  from "../nav/Header"
import {UserInfo}  from "./UserInfo"
import {Title}  from "./Title"
import {Boodschap}  from "./Boodschap"




export class Profiel extends React.Component {
     componentDidMount() {
       
    }
    render() {
        return (
            <div>
                <Header/>

                <div className="wrapper">
                    <UserInfo/>
                    <Title title='Boodschappen'/>
                    <Boodschap/>
                </div>
            </div>
        )
    }
}