/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';

import { css } from 'glamor';

let StyledTitle = css ({
	float:'left'
})
let StyledTitleContainer = css ({
	width: '100%',
	float: 'left'
})
let StyledSub = css ({
	color: '#C9C9C9',
	marginLeft:'8px'
})

export class ShopTitle extends React.Component {
	
    render() {
    	
        return (
        	<section>
        		<div{...StyledTitleContainer}>
					<h2{...StyledTitle}>Colruyt Aalst</h2>
					<p {...StyledTitle}{...StyledSub}>Grootwarenhuis</p>
        		</div>
        	</section>
        	
        )
    }
}
 