/**
 * Created by daanzwaenepoel on 16/04/17.
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
  height: '80px',
  display: 'flex',
  alignItems: ' center',
  '@media(min-width: 961px)': {
    marginLeft:'0%',
    width:'100%',
  }

  
})
let StyledWapper = css({
  margin:'0'

  
})
let MenuContainer= css({
  width:'100%',
  float:'left',
  textAlign:'right',
  '@media(min-width: 600px)': {
    display: 'none',
    width:'0%',


  }

})
   
let StyledMenu = css({
  padding: '5px 10px',
  textAlign:'center',
  textDecoration:'none',
  color: '#000',
  border: 'solid',
  borderWidth:'2px',
  


})

let StyledUl = css({
  float:'left',
  width: '70%',
  textAlign:'right',
  display: 'none',
  '@media(min-width: 600px)': {
    display: 'inline'
  }
  
})
  
let StyledLink = css({
  marginLeft: '10%',
  color: '#000',
  textDecoration:'none',
  
  
})
  
let StyledH1 = css({
  float:'left',
  width: '30%',
  fontSize: '25px',
  
})



export default class Header extends React.Component {

  constructor() {
    super();
    this.state = {
      ShowSideNav: false,
      links: [{linkName:'Profiel',address:'/'},
              {linkName:'Winkels',address:'/winkels'},
              {linkName:'Boodschappen',address:'/boodschappen'},
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
  logout(){
      console.log('daan');
      event.preventDefault();
      localStorage.setItem('jwtToken', '');
      document.cookie = "XSRF-TOKEN=''; path=/";
      document.cookie = "user=''; path=/";
      document.cookie = "loginFlag=false; path=/";
      window.location.assign('/')
  }
  render() {
    return(
    <div>
      <section {...StyledHeader}>
        <div className="wrapper clearfix">
          <div {...HeaderContainer}>   
            <h1 {...StyledH1}>Easyshop</h1>
            <div {...MenuContainer}>
               <a {...StyledMenu}href="#" onClick={this.handleClick.bind(this)}>MENU</a>
            </div>
           
            <ul {...StyledUl}>
              {
                this.state.links.map(function(link) {
                  return <Link {...StyledLink}  key={link.linkName} to={link.address}>{link.linkName}</Link>
                  
                })
              }

              <a {...StyledLink}   onClick={this.logout.bind(this)} href="#">logout</a>

            </ul>
          </div>
        </div>
      
      </section>
      { this.state.ShowSideNav && <SideNav links={this.state.links} logout={this.logout.bind(this)} closeNav = {this.closeNav.bind(this)}/>}
    </div>
    
    );
  }
}