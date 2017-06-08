/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';
import {css} from 'glamor';

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
    width: '50%'
})
let StyledRight = css ({
    float:'left',
    width: '50%'
})
let StyledPoductContainer = css ({
    float:'left',
    width: '33.33%'
})
let StyledDelete = css({
    textDecoration:'none',
    color: '#000',
    backgroundColor: '#fff',
    padding: '5px 5px',
    float: 'left',
    border:'solid',
    borderWidth:'1px'
})

export class BoodschapProduct extends React.Component {
     constructor(props) {

        super(props);
      
        this.state = {
            show:true
        
        }
    }
    componentDidMount() {
       
    }
    delete(){
        console.log(JSON.parse(localStorage.getItem('winkelmandje')))
        var array= JSON.parse(localStorage.getItem('winkelmandje'));
        console.log(this.props.shopId)
         array.forEach(function(a,y) {
           
            if (a.WinkelId == this.props.shopId) {
                 console.log(y)
                  a.Boodschappen.forEach(function(b,i) {
                        console.log('boodschappen')
                        console.log(array[y].Boodschappen.length)
                        if (i == 0 && array[y].Boodschappen.length == 1) {
                            array.splice(y, 1)
                             localStorage.setItem('winkelmandje',JSON.stringify(array));
                             if(array.length == 0){
                                localStorage.removeItem("winkelmandje");
                                  this.props.hide()
                                  return
                             }
                              this.props.hide()
                                    

                        }
                        if (this.props.prId == b.ProductId) {
                            array[y].Boodschappen.splice(i, 1)
                            
                        }


                  }.bind(this))
                  console.log(array[y].Boodschappen)
            }
         }.bind(this))
         localStorage.setItem('winkelmandje',JSON.stringify(array));
        this.setState({ show: false})
        
    }
    render() {
        return (
            <div>
                {
                      this.state.show ?
                     <div {...StyledPoductContainer}>
                            <div {...StyledLeft}>
                                <h3>{this.props.prName}</h3>
                                 <p>Aantal: <span>{this.props.prCount}</span></p>
                                <a   onClick={this.delete.bind(this)} {...StyledDelete}href="#">Delete</a> 
                            </div>
                            <div {...StyledRight}>
                                                        <div {...StyledImg} {...css({backgroundImage: 'URL("/images/producten/'+this.props.prImg+'") '})}></div>
                            </div>
                    </div>
                    :
                    <div></div>
                }

                
            </div>
        )
    }
}