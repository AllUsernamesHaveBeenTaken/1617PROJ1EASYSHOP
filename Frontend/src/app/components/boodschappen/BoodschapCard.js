/**
 * Created by seppesnoeck on 11/04/17.
 */
import React from "react";
import {Link} from 'react-router-dom';
import { css } from 'glamor';


let logo = css({
    height: '107px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    width: '100%',
    backgroundPosition:'center',
    margin: '5%',
    '@media(min-width: 660px)': {
        height:'60px'
    }
})

let styledSection = css({
    borderBottom: 'solid 1px',
    borderColor: 'rgba(134, 139, 141, 0.42)',
    float: 'left',
    width: '100%'
})



let styledlogoDiv = css({
    width: '35%',
    float: 'left',
    '@media(min-width: 660px)': {
        width:'30%',
    }

})

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

let styledTitle = css ({
    fontWeight: '300',
    float:'left'
})
let styledAfstand = css({
    float:'left',
    marginLeft: '5px'
})

let styledContainerDiv = css ({
    float: 'left',
    width:'57%',
    marginLeft:'8%',
    paddingTop:'20px',
    '@media(min-width: 660px)': {
        width:'65%',
         marginLeft:'5%',
    }

})
let styledInfoDiv = css({
    width: '100%',
    float: 'left',
    '@media(min-width: 660px)': {
        width:'55%',
  
    }
})
let styledLinkDiv = css({
    width: '100%',
    float: 'left',
    marginTop:'10px',
    '@media(min-width: 660px)': {
        width:'45%',
  
    }
})
let styledAddres = css ({
    float:'left',
    width: '100%',
})
let divMargin = css ({
    marginBottom:'5px'
})
let styledlinkextra = css({
    border: 'solid',
    borderWidth:'1px',
    padding:'5px 10px'
})

export const Boodschap = (props) => {

    return(
        <section>
            
            <div {...styledSection}>
               

                <div {...styledContainerDiv}>
                    <div{...styledInfoDiv}>
                        <h2{...styledTitle} {...divMargin}>{props.shopName}</h2>
                        <p {...styledAddres} {...divMargin}>{props.address}</p>
                    </div>
 
                    <div{...styledLinkDiv}>
                        <Link {...styledLink} {...styledlinkextra}to={"/boodschappen/"+props.id} >Bekijk</Link>
                    </div>
                </div>
                
            </div>
        </section>
    );
}