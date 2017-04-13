/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledSection = styled.section`
    border-bottom-style:solid;

`;
const StyledUl = styled.ul`
  float:left;
  width: 70%;
  text-align:right;
`;
const StyledLink = styled(Link)`
  margin-left: 5%;
  color: #000;
  text-decoration:none;

`;
const StyledH1 = styled.h1`
  float:left;
  width: 30%;
`;

export const Header = (props) => {
    return(
      <StyledSection >
          <div className="wrapper clearfix">
            <StyledH1>Easyshop</StyledH1>
            <StyledUl>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/winkels">Winkels</StyledLink>
              <StyledLink to="/Boodschappen">Boodschappen</StyledLink>
              <StyledLink to="/Profiel">Profiel</StyledLink>
              <StyledLink to="/Winkelmandje">Winkelmandje</StyledLink>
            </StyledUl>
          </div>
          

      </StyledSection>
    );
}