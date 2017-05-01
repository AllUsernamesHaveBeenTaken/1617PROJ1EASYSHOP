/**
 * Created by seppesnoeck on 11/04/17.
 */
import React from "react";
import {Link} from 'react-router-dom';


export const Winkel = (props) => {
    return(
        <section>
            <Link to="Winkels">
                <div className="WinkelLogo"/>
                <p>Colruyt Aalst</p>
                <p>1km</p>
                <p>adres adres adres ofzo iets</p>
                <Link to='/winkel/col/producten' >Winkel</Link>
            </Link>
        </section>
    );
}