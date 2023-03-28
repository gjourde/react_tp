import React, { Component } from 'react';

/*
 * Components Main
 */
export default class Button extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <button onClick={this.props.onAction} type="button" className="btn btn-primary">{this.props.textButton} </button>
        )
    }
}