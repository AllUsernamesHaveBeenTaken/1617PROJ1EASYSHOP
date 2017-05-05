/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';

import Header  from "../nav/Header"
import { Filter } from "./Filter"
import { Winkel } from "./WinkelCard"
import { css } from 'glamor';

let styledFilter = css({
	float: 'left',
    width: '100%',
    '@media(min-width: 550px)': {
        float: 'left',
    	width: '25%',
    	margin: '0% 3%',
    }
})
let styledwinkelcontainer = css({
	float: 'left',
    width: '100%',
    '@media(min-width: 550px)': {
       float: 'left',
    	width: '63%',
    }

})
let styledDivTop = css({
	
	'@media(min-width: 550px)': {
       marginTop:'25px',
    }
})
export class Winkels extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <section className='wrapper'>
					<div {...styledDivTop}{...styledFilter}>
						<Filter />
	                </div>
				
					<div {...styledDivTop} {...styledwinkelcontainer}>
						<Winkel/>
						<Winkel/>
						<Winkel/>
						<Winkel/>
						<Winkel/>
						<Winkel/>
					</div>
                </section>
                
				
            </div>
        )
    }
}