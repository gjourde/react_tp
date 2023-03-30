import React, { Component } from 'react';
import axios from 'axios';
/*
 * Components List
 */
export default class PriceList extends Component {
    constructor() {
        super();
        this.state = { allMusic: [] }
    }

    componentDidMount() {
        this.getAllMusic()
    }

    //Appel à l'API qui renvoi la liste de entreprise en fonction de l'ID de la category
    getAllMusic() {
        axios.get(`/api/music`)
            .then(response => {
                this.setState({ allMusic: response.data })
                console.log('allMusic -> response.data:', response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        //const { list } = this.props.myList
        return (
            <div>
                {this.state.allMusic.map((music, index) =>
                    <ul key={index}>
                        <li>{music.name}</li>
                        <li>{music.duration}</li>
                    </ul>)}
            </div>
        )
    }
}