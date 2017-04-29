/**
 * Created by seppesnoeck on 5/04/17.
 */
/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';
import cookie from 'react-cookie'; {/*Om eenmalig op de landingspagina te komen !! werkt nog niet*/}


export class Landing extends React.Component {
    setCookie() {
        cookie.save('beenHere', 1, {path: '/'});
    }

    render() {
        return (
            <section className="bgImg">
            
                <div className="cardLanding">
                    
                        <div className="card-container">
                             <div className="title-container">
                                 <h1>Easyshop</h1>
                             </div>
                            <Link to="/register" className="link" >&#60; Meld u aan als winkel</Link>
                            <div className="icon"/>
                            <Link to="/" className="link" >Start winkelen &#62;</Link> {/* Geen <a>-tag atributes in een <Link>-tag geeft error. Geen tag werk blijkbaar ook*/}
                        </div>

                </div>

            </section>
        )
    }
}