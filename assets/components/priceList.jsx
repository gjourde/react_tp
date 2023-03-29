import React, { Component } from 'react';

/*
 * Components List
 */
export default class PriceList extends Component {
    constructor() {
        super();
    }

    render() {
        //const { list } = this.props.myList
        console.log(this.props.myList);
        return (
            <div>
                {this.props.myList.map((line, index) =>
                    <ul key={index}>
                        <li>{line.category}</li>
                        <li>{line.price}</li>
                        <li>{line.stocked}</li>
                        <li>{line.name}</li>
                    </ul>)}
            </div>
        )
    }
}