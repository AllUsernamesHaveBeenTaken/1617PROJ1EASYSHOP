/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';
import {css} from 'glamor';

import Header  from "../nav/Header"

let pic = css ({
    height: '70px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    width: '70px',
    backgroundPosition:'center',
    float:'left',
  
})
let StyledInfoContainer = css({
    float:'left',
    width:'70%',
    marginLeft:'10px'
})
let StyledContainer = css({
    marginTop: '30px',
    marginLeft:'2%'
})


export class UserInfo extends React.Component {
     componentDidMount() {
       
    }
    
    render() {
        return (
            <div>
                <div className='clearfix'{...StyledContainer}>
                    <div {...pic} {...css({backgroundImage: 'URL("/images/users/pic.jpg") '})}></div>
                    <div {...StyledInfoContainer}>
                        <p>Firestname lastmane</p>
                        <p>Email</p>
                        <p>Kaaistraat 1790 Affligem</p>
                    </div> 
                </div>
                
            </div>
        )
    }
}