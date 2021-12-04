import React, { Component } from 'react';
import Header from './Header';
import './User.css';
import Cookies from 'js-cookie';

class User extends Component {
    state = {User: Cookies.get('user')};
    render() {
        console.log(this.state.User);
        return(
            <div className="profile-page">
                <Header />
                <div className="profile-body">
                    <h1>
                        Welcome, {this.state.User}
                    </h1>
                </div>
            </div>
        );
    }
}

export default User;