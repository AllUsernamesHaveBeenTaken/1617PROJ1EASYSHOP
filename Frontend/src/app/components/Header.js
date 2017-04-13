/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';
import { css } from 'glamor'

let StyledSection = css({
  
})

   


let StyledUl = css({
  float:'left',
  width: '70%',
  textAlign:'right'
})
  
let StyledLink = css({
  marginLeft: '5%',
  color: '#000',
  textDecoration:'none',
  '@media(max-width: 300px)': {
    color: 'green'
  }
})
  
let StyledH1 = css({
  float:'left',
  width: '30%'
})
  


export const Header = (props) => {
    return(
      <section >
          <div className="wrapper clearfix">
            <h1 {...StyledH1}>Easyshop</h1>
            <ul {...StyledUl}>
              <Link {...StyledLink}  to="/">Home</Link>
              <Link {...StyledLink} to="/winkels">Winkels</Link>
              <Link {...StyledLink} to="/Boodschappen">Boodschappen</Link>
              <Link {...StyledLink} to="/Profiel">Profiel</Link>
              <Link {...StyledLink} to="/Winkelmandje">Winkelmandje</Link>
            </ul>
          </div>
          

      </section>
    );
}