import React, { Component } from 'react';
import Header from '../Header/Header';
import Cookies from 'js-cookie';
import PersonalTableView from '../Table/PersonalTools/PersonalTableView';
import './Profile.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate
  } from "react-router-dom";

class Profile extends Component {
    state = {User: Cookies.get('user')};
    render() {
        return(
            <div className="profile-page">
                <Header />
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