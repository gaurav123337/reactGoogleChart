import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';


class SearchBarComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            trem:''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({
            term : ''
        });
    }

    onInputChange = (event) =>{
        this.setState({
            term : event.currentTarget.value
        });
    }



    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.term} onChange={this.onInputChange} />
                <button type="submit" className="primary-button"  >Go</button>

            </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps) (SearchBarComponent);