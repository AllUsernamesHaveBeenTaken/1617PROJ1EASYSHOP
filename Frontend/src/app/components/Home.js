/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';
import { Header } from "./Header"
import { Banner } from "./Banner"



const query = {
  'width-between-400-and-599': {
    minWidth: 400,
    maxWidth: 599
  },
  'width-larger-than-600': {
  
    minHeight: 400
  }
};


export class Home extends React.Component {

    render() {
        return (
        	<div>
                <Header/>			
            </div>
        )
    }
}
 