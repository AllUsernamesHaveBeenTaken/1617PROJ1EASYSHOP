/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';
import {css} from 'glamor';

import Header  from "../nav/Header"

import {BoodschapProduct} from "./BoodschapProduct"



let title = css({
    borderBottom: 'solid',
    width: '100%',
    borderWidth: '1px',

    borderColor:'rgba(134, 139, 141, 0.42)',
})
let StyledProduct = css({
    float: 'left',
    width:'100%'
})
let StyledWinkel = css ({
    textDecoration: 'none',
    color: '#000',
    padding: '9px 5px',
    border: 'solid',
    borderWidth:'1px',
    marginLeft:'10px'

})
let StyledBestellen = css({
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#000',
     padding: '10px 20px',

})
let StyledButton = css ({
    marginTop: '25px',
    float: 'left'
})
export class Boodschap extends React.Component {
     componentDidMount() {
       console.log(this)
    }
    render() {
        return (
            <div> 
                <div className='clearfix'>
                    <h2 {...title}>Winkelnaam</h2>

                    <div className='clearfix'{...StyledProduct}>
                        <BoodschapProduct/>
                    <BoodschapProduct/>
                    <BoodschapProduct/>
                    <BoodschapProduct/>
                   <BoodschapProduct/>
                    </div>
                    
                    
                    
                    <div {...StyledButton}>
                    <a {...StyledBestellen} to='/'>Bestellen</a>
                    <Link  {...StyledWinkel}to='/winkel/producten/1'>Terug naar winkel</Link>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}