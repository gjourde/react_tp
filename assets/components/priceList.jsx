import React, { Component } from 'react';

/*
 * Components Main
 */
export default class PriceList extends Component {
    constructor() {
        super();
    }

    render() {
        
        return (
            <div>
                {this.props.list.map((line, index) => 
                <ul key={index}>
                    <li>{line.category}</li>
                    <li> {line.price}</li>
                    <li>{line.stocked}</li>   
                    <li>{line.name}</li>
                </ul>)}
            </div>
        )
    }
}