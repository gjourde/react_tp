import React, { Component } from 'react';
import Button from "./Button";

/*
 * Components Main
 */
export default class Main extends Component {
    constructor() {
        super();
        this.state = { temperature: 25, pression: 1 }
        this.add = this.add.bind(this)
        this.sub = this.sub.bind(this)
    }

    add() {
        this.setState({ temperature: this.state.temperature + 1 })
    }

    sub() {
        this.setState({ temperature: this.state.temperature - 1 })
    }


    render() {
        return (
            <div>
                <div>{this.state.temperature}</div>
                {/* onAdd est la Pros du components button */}
                <Button onAction={this.add} textButton="add" />
                <Button onAction={this.sub} textButton="sub" />
                {/* <button onClick={this.add}>add</button>
                <button onClick={this.sub}>sub</button> */}
            </div>
            // <Test />
        )
    }
}