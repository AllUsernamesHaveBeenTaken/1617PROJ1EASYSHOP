/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";

export const Header = (props) => {
    return(
      <nav className="navbar navbar-default">
          <div className="container">
              <div className="navbar-header">
                  <ul className="nav navbar-nav">
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Shops</a></li>
                      <li><a href="#">Profile</a></li>
                  </ul>
              </div>
          </div>
      </nav>
    );
}