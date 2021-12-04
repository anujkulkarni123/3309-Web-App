import React, { Component } from 'react';
import Header from './Header';
import './User.css';

class User extends Component {
    render() {
        return(
            <div className="profile-page">
                <Header />
                <div className="profile-body">
                    <h1>
                        Welcome, 
                    </h1>
                </div>
            </div>
        );
    }
}

export default User;