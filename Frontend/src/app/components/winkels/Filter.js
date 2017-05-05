/**
 * Created by seppesnoeck on 11/04/17.
 */
import React from "react";
import {Link} from 'react-router-dom';
import { css } from 'glamor';
import Dropdown from 'react-dropdown'

let FilterContainer = css({

    float: 'left',
    width: '100%',
    backgroundColor: '#f1f1f1',
    padding: '4%'

})

let Styledh1 = css ({

    fontWeight: 500,
    fontSize: '20px',
    color: 'black',
    marginTop: '15px',
    float: 'left',
    width: '100%'

})

let StyledInput = css({

    float: 'left',
    width: '100%',
    marginTop: '15px',
    padding: '10px',

})

let StyledCheck = css({

    float: 'left',
    marginRight: '5px'


})

let Button = css({
    color: '#fff',
    backgroundColor: '#000',
    padding: '10px',
    float: 'left',
    textDecoration: 'none',
    marginTop: '15px'
})
let StyledP = css({
})



export const Filter = (props) => {
    return(
        <section>
            <div className="clearfix">
                <div {...FilterContainer}>
                    <h2{...Styledh1}>Zoeken</h2>
                    <input {...StyledInput} type="text" placeholder="Winkel naam" name="Winkelnaam" />
                    <input {...StyledInput} type="text" placeholder="Postcode" name="Postcode" />

                    <h3{...Styledh1}>Afstand</h3>
                    <input {...StyledCheck} type="checkbox" name="020" />
                    <p{...StyledP}>0 km - 20 km</p>
                    <input {...StyledCheck}type="checkbox" name="2050" />
                    <p{...StyledP}>20 km - 50 km</p>
                    <input {...StyledCheck}type="checkbox" name="5080" />
                    <p{...StyledP}>50 km - 80 km</p>
                    <input {...StyledCheck}type="checkbox" name="80plus" />
                    <p{...StyledP}>80 km &#60; ...</p>

                    <h4{...Styledh1}>Categorie</h4>
                    <input {...StyledCheck}type="checkbox" name="supermarkt" />
                    <p>Supermarkt</p>
                    <input {...StyledCheck}type="checkbox" name="slager" />
                    <p>Slager</p>
                    <input{...StyledCheck} type="checkbox" name="baker" />
                    <p>Baker</p>
                    <input{...StyledCheck} type="checkbox" name="groeten winkel" />
                    <p>Groeten winkel</p>
                    <Link {...Button} to="Winkels" type="submit" value="Zoeken">Zoeken</Link>
                </div>

            </div>
        </section>
    );
}