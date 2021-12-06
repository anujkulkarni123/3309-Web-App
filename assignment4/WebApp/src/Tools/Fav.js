import React, { Component } from 'react';
import { FaHeart } from 'react-icons/fa';
import { InsertFavourite } from '../Axios/Axios';
import Cookies from 'js-cookie';

// component to like/unlike tools
export default class Fav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fav: this.props.fav
        }
    }

    handleFav = () => {

        const { fav } = this.state;

        const info = {
            username: Cookies.get('user'),
            toolID: this.props.ID
        }

        this.setState(({ fav }) => ({ fav: !fav }));
        if (fav)   {
            InsertFavourite(info);
        } else  {
        }
    }

    render() {
        return (
            <FaHeart id="icon-heart" className="icon-heart" class={this.state.fav ? 'icon-heart-active' : 'icon-heart'} onClick={() => {this.handleFav()}}/>
        );
    }
}
