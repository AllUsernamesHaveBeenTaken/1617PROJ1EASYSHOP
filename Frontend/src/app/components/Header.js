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
  borderWidth:'2px',
  '@media(min-width: 600px)': {
    display: 'none'
  }


})

let StyledUl = css({
  float:'left',
  width: '70%',
  textAlign:'right',
  
})
  
let StyledLink = css({
  marginLeft: '5%',
  color: '#000',
  textDecoration:'none',
  display: 'none',
  '@media(min-width: 600px)': {
    display: 'inline'
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
      links: [{linkName:'Home',address:'/'},
              {linkName:'winkels',address:'/winkels'},
              {linkName:'Boodschappen',address:'/boodschappen'},
              {linkName:'Profiel',address:'/profiel'},
              {linkName:'Winkelmandje',address:'/winkelmandje'},

            ],
    };
  }
  handleClick(){
    this.state.ShowSideNav = true
  }
  closeNav(){
    this.state.ShowSideNav = false
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
              {
                this.state.links.map(function(link) {
                  return <Link {...StyledLink}  key={link.linkName} to={link.address}>{link.linkName}</Link>
                  
                })
              }

            </ul>
          </div>
        </div>
      </section>
      { this.state.ShowSideNav && <SideNav links={this.state.links} closeNav = {this.closeNav.bind(this)}/>}
    </div>
    
    );
  }
}