/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';
import Header from "../nav/Header"
import { Banner } from "./Banner"




export class Home extends React.Component {
	componentWillMount(props = this.props){
		console.log(props)
	}
    render() {
    	console.log(this.props)
        return (
        	<div>
                <Header/>	
               	

            </div>
        )
    }
}
 