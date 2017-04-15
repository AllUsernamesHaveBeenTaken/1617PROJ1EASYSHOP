/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';
import { css } from 'glamor';
import SideNav  from "./SideNav"


let StyledHeader = css({

  borderBottom: 'solid'
})
let HeaderContainer = css({
  marginLeft:'5%',
  width:'90%',
  marginTop: '20px'
  
})

   
let StyledMenu = css({
  float:'right',
  padding: '5px 10px',
  textAlign:'center',
  textDecoration:'none',
  color: '#000',
  border: 'solid',
  borderWidth:'2px'

})

let StyledUl = css({
  float:'left',
  width: '70%',
  textAlign:'right',
  display:'none'
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
  width: '30%',
  fontSize: '25px'
})




export default class Header extends React.Component {

  constructor() {
    super();
    this.state = {
      ShowSideNav: false,
    };
  }
  handleClick(e){
    
    this.state.ShowSideNav = true
   


  }
  closeNav(){
    console.log(this.props)
  }
  
  render() {
    return(
    <div>
      <section {...StyledHeader}>
        <div {...HeaderContainer}>
          <div className="wrapper clearfix">
            <h1 {...StyledH1}>Easyshop</h1>
            <a {...StyledMenu}href="#" onClick={this.handleClick.bind(this)}>MENU</a>
            <ul {...StyledUl}>
              <Link {...StyledLink}  to="/">Home</Link>
              <Link {...StyledLink} to="/winkels">Winkels</Link>
              <Link {...StyledLink} to="/Boodschappen">Boodschappen</Link>
              <Link {...StyledLink} to="/Profiel">Profiel</Link>
              <Link {...StyledLink} to="/Winkelmandje">Winkelmandje</Link>
            </ul>
          </div>
        </div>
      </section>
      { this.state.ShowSideNav && <SideNav ShowSideNav={ this.state.ShowSideNav} closeNav = {this.closeNav.bind()}/>}
    </div>
    
    );
  }
}