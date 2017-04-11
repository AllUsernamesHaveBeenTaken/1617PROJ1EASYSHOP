/**
 * Created by seppesnoeck on 11/04/17.
 */
import React from "react";
import {Link} from 'react-router-dom';


export const Filter = (props) => {
    return(
        <section>
            <p>zoeken</p>
            <input type="text" placeholder="Winkel naam" name="Winkelnaam" />
            <input type="text" placeholder="Postcode" name="Postcode" />
            <p>afstand</p>
            <input type="checkbox" name="020" />
            <p>0 km - 20 km</p>
            <input type="checkbox" name="2050" />
            <p>20 km - 50 km</p>
            <input type="checkbox" name="5080" />
            <p>50 km - 80 km</p>
            <input type="checkbox" name="80plus" />
            <p>80 km &#60; ...</p>
            <p>Categorie</p>
            <input type="checkbox" name="supermarkt" />
            <p>Supermarkt</p>
            <input type="checkbox" name="slager" />
            <p>Slager</p>
            <input type="checkbox" name="baker" />
            <p>Baker</p>
            <input type="checkbox" name="groeten winkel" />
            <p>Groeten winkel</p>
            <input type="submit" value="Zoeken" />
        </section>
    );
}