/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';

import Header  from "../nav/Header"
import {LoginForm}  from "./LoginForm"
import {SignupForm}  from "./SignupForm"


export class Login extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <SignupForm/>
            </div>
        )
    }
}