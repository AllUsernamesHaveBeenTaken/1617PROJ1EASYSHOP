/**
 * Created by seppesnoeck on 11/04/17.
 */
import React from "react";
import {Link} from 'react-router-dom';


export const Banner = (props) => {
    return(
        <section className="bannerBg">
            <div className="locationCard">
                <input type="text" placeholder="Postcode" name="Postcode" />
                <div className="iconBanner"/>
                <input type="submit" value="Submit" />
            </div>

        </section>
    );
}/**
 * Created by seppesnoeck on 11/04/17.
 */
