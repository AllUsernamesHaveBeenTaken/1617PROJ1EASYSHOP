/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';


export const Header = (props) => {
    return(
      <section>
          <Link to="/">Easyshop</Link>
          <Link to="/">Home</Link>
          <Link to="/winkels">Winkels</Link>
          <Link to="/Boodschappen">Boodschappen</Link>
          <Link to="/Profiel">Profiel</Link>
          <Link to="/Winkelmandje">Winkelmandje</Link>
      </section>
    );
}