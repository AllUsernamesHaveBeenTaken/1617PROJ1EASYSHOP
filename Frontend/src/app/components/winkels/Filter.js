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



export class Filter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            winkelNaam: '',
            postcode: ''
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value }, () => {
            this.props.changeSearchable(this.state.winkelNaam, this.state.postcode);
        });
    }
    render(){
        return(
            <section>
                <div className="clearfix">
                    <div {...FilterContainer}>
                        <h2{...Styledh1}>Vind uw winkel!</h2>
                        <input {...StyledInput} type="text" value={this.state.winkelNaam} onChange={this.onChange} placeholder="Winkel naam" name="winkelNaam" />
                        <input {...StyledInput} type="number" value={this.state.postcode} onChange={this.onChange} placeholder="Postcode" name="postcode" />
                    </div>

                </div>
            </section>
        );
    }

}