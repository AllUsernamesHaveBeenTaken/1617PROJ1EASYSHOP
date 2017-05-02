/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { userSignupRequest } from '../../functions/functions'

import Header  from "../nav/Header";
import {LoginForm}  from "./LoginForm";
import {SignupForm}  from "./SignupForm";



export class Login extends React.Component {
    render() {

        /*const { userSignupRequest } = this.props;

        connect(null, { userSignupRequest });*/

        return (
            <div>
                <Header/>
                {/*<SignupForm {userSignupRequest={userSignupRequest}}/>*/}
                <SignupForm/>
            </div>
        )
    }
}

/*Login.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
};*/
