/**
 * Created by DaanZwaenepoel on 14/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';

import { css } from 'glamor';

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
      transition: '0.3s'
})
let StyledSideLink = css({
  float: 'left',
  width: '100%',
  color:  '#000',
  textDecoration: 'none',
  transition: '0.3s'
})

export default class SideNav extends React.Component {
  handleClickClose(e){
    
    console.log(this.props)
    this.props.closeNav()
  }
  render() {
    return (
       <div {...StyledSideNav}>
          <a href="#" onClick={this.handleClickClose.bind(this)}>&times;</a>
        dit is een test
             
        </div>
    );
  }
}