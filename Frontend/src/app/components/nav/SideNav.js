/**
 * Created by DaanZwaenepoel on 14/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';

import { css } from 'glamor';

let move = css.keyframes({
 '0%': { width:'0%' },
  '100%': { width:'100%'}
})
let StyledSideNav = css({
   height: '100%',
    width: '100%',
    position: 'fixed',
    Zindex: '1',
    top: '0',
    left: '0',
    backgroundColor: '#fff',
    overflowX: 'hidden',
    textAlign:'center',
     animation: `${move} 0.3s`,
})
let StyledSideLink = css({
  float: 'left',
  width: '100%',
  color:  '#000',
  textDecoration: 'none',
  marginTop: '15%',
  fontSize: '20px',
})
let CloseContainer = css ({
  height: '80px',
  display: 'flex',
  alignItems: ' center',
  justifyContent: 'flex-end',
  width:'95%'
  

})


let StyledCLose = css({
  textDecoration: 'none',
  fontSize: '40px',
  color:  '#000',

})

export default class SideNav extends React.Component {
  handleClickClose(e){
    this.props.closeNav()
  }
  logout(){
    this.props.logout()
  }
  render() {
    return (
       <div {...StyledSideNav}>
      <div {...CloseContainer}>
        <a {...StyledCLose} href="#" onClick={this.handleClickClose.bind(this)}>&times;</a>
      </div>
          
        {
          this.props.links.map(function(link) {
            return <Link {...StyledSideLink}  key={link.linkName} to={link.address}>{link.linkName}</Link>
            
          })
        }
         <a {...StyledSideLink}   onClick={this.logout.bind(this)} href="#">logout</a>
             
        </div>
    );
  }
}