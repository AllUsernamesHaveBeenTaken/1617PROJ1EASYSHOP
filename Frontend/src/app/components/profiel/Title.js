/**
 * Created by seppesnoeck on 1/03/17.
 */
import React from "react";
import {Link} from 'react-router-dom';
import {css} from 'glamor';

import Header  from "../nav/Header"


let title = css({
    borderBottom: 'solid',
    width: '96%',
    borderWidth: '1px',
    marginLeft: '2%',
    borderColor:'rgba(134, 139, 141, 0.42)',
})

export class Title extends React.Component {
     componentDidMount() {
       console.log(this)
    }
    render() {
        return (
            <div>
                <h2 {...title}>{this.props.title}</h2>
                
            </div>
        )
    }
}