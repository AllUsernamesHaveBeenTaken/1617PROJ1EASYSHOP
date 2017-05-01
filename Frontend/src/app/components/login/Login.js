/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';

import Header  from "../nav/Header";
import {LoginForm}  from "./LoginForm";
import {SignupForm}  from "./SignupForm";



export class Login extends React.Component {
    render() {



        connect((state) => {return {} }, { userSignupRequest });

        function userSignupRequest(userData){
            return dispatch => {
                return axios.post('api.easy-shop.xyz/users', userData);
            }
        }

        return (
            <div>
                <Header/>
                <SignupForm userSignupRequest={userSignupRequest} />
            </div>
        )
    }
}

Login.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
};