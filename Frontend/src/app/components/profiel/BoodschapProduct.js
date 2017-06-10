/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';
import {css} from 'glamor';
import axios from 'axios';

import Header  from "../nav/Header"

let StyledImg = css({
    height: '170px',
    width: '95%',
    marginRight: '5%',
    float: 'right',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    backgroundSize: 'contain',
})
let StyledLeft = css ({
    float:'left',
    width: '50%',
    padding:'10px'
})
let StyledRight = css ({
    float:'left',
    width: '50%'
})
let StyledPoductContainer = css ({
    float:'left',
    width: '77%',
    border: 'solid 1px',
    marginLeft: '50px',
    marginTop: '10px'
})

export class BoodschapProduct extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            productName:'',
            amount: '',
            img: '',
            price:''
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {
        axios.defaults.withCredentials = true;
        axios.get('http://api.easy-shop.xyz/api.php/products/'+this.props.prId+'?csrf='+ localStorage.getItem('jwtToken')).then((response) => {
             this.setState({productName:response.data.name,img: response.data.imageName,price: response.data.price});

            
           

        })
        .catch(function (error) {
            console.log(error);
        });
    }
    render() {
        return (
            <div>
                 <div {...StyledPoductContainer}>
                        <div {...StyledLeft}>
                            <h3>{this.state.productName}</h3>
                             <p>Aantal: <span>{this.props.amount}</span></p>
                             <p>Prijs:$ {this.state.price}</p>
                        </div>
                        <div {...StyledRight}>
                                <div {...StyledImg} {...css({backgroundImage: 'URL("/images/producten/'+this.state.img+'") '})}></div>
                        </div>
                </div>
                
            </div>
        )
    }
}