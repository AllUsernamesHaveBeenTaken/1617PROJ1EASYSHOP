/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';

import { css } from 'glamor';

let StyledBannercontainer = css({
    height: '300px',
    backgroundColor: '#D6D6D6',
    marginBottom: '50px'
})
let StyledBanner = css({
    height: '280px',
    backgroundImage: 'url("/images/winkels/banner-colruyt.png")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    backgroundSize: 'cover',
})
export class Banner extends React.Component {
	
    render() {
    	
        return (
        	<section>
        	     <div {...StyledBannercontainer}>
                    <div {...StyledBanner}>
                        
                    </div>
                </div>
        	</section>
        	
        )
    }
}
 