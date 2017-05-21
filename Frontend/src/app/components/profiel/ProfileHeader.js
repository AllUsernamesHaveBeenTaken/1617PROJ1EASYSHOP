/**
 * Created by seppesnoeck on 18/05/17.
 */

import React from "react";
import {Link} from 'react-router-dom';
import {css} from 'glamor';

let styledLink = css ({
    color: 'black',
    textDecoration: 'none',
    borderBottom: 'solid',
    borderWidth: '1px',
    fontSize:'14px',
    padding: '5px 0px',
    marginRight: '10%',
    '@media(min-width: 660px)': {
        marginRight:'15%'

    }
})

let styledlinkextra = css({
    border: 'solid',
    borderWidth:'1px',
    padding:'5px 10px'
})


export class ProfileHeader extends React.Component{
    render(){
        return(
            <div>
                <section className='wrapper'>
                    <Link {...styledLink} {...styledlinkextra} to={"/winkels"} >Start winkelen</Link>
                    <Link {...styledLink} {...styledlinkextra} to={"/boodschappen"} >Bezorg boodschappen</Link>
                </section>
            </div>
        );
    }
}