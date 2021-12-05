import React, { Component } from 'react';
import Header from '../Header/Header';
import Cookies from 'js-cookie';
import PersonalTableView from './PersonalTools/PersonalTableView';
import './Profile.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate
  } from "react-router-dom";

class Profile extends Component {

    // State to get the username from the cookie
    state = {User: Cookies.get('user')};
    render() {
        return(
            <div className="profile-page">
                <Header />
                {/* Welcome message to the user */}
                <h1>
                    Welcome, {this.state.User}
                </h1>
                <div className="user-tools">
                    <button className="addtool-btn"><Link className='addtool-btn' to="/InsertTool">Add Tool</Link></button>
                    <PersonalTableView/>
                </div>
                <div className="pTable">
                    
                </div>
            </div>
        );
    }
}

export default Profile;