/**
 * Created by seppesnoeck on 11/04/17.
 */
import React from "react";
import {Link} from 'react-router-dom';
import { css } from 'glamor';


let logo = css({
    backgroundImage: 'URL("/images/winkels/logo-colruyt.jpg")',
    height: '107px',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    margin: '5%'
})

let styledSection = css({
    borderBottom: 'solid 1px gray',
    float: 'left',
    width: '100%'
})

let styledInfoDiv = css({
    width: '60%',
    float: 'left'
})

let styledlogoDiv = css({
    width: '30%',
    float: 'left'
})

let styledLink = css ({
    color: 'black',
    textDecoration: 'none'
})

let styledTitle = css ({
    fontWeight: '300'
})


export const Winkel = (props) => {
    return(
        <section>
            <div {...styledSection}>
                <Link {...styledLink} to="Winkels">
                    <div{...styledlogoDiv}>
                        <div {...logo} className="WinkelLogo"/>
                    </div>
                    <div{...styledInfoDiv}>
                        <p{...styledTitle}>Colruyt Aalst</p>
                        <p>1km</p>
                        <p>adres adres adres ofzo iets</p>
                    </div>
                </Link>
                <div>
                    <Link to="Winkels" >Meer info</Link>
                    <Link to="winkel/col/producten" >Winkel</Link>
                </div>
            </div>
        </section>
    );
}