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
                    <input {...StyledInput} type="text" placeholder="Zoek product" name="Product" />
                    

                    <h3{...Styledh1}>Categorie</h3>
                    <input {...StyledCheck} type="checkbox" name="020" />
                    <p{...StyledP}>Drogevoeding</p>
                    <input {...StyledCheck}type="checkbox" name="2050" />
                    <p{...StyledP}>Groeten</p>
                    <input {...StyledCheck}type="checkbox" name="5080" />
                    <p{...StyledP}>Vlees</p>
                    <input {...StyledCheck}type="checkbox" name="80plus" />
                    <p{...StyledP}>Andere</p>

               
                    <Link {...Button} to="Winkels" type="submit" value="Zoeken">Zoeken</Link>
                </div>

            </div>
        </section>
    );
}