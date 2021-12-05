import React, { useState, useEffect, Component } from 'react'
import { FaSearch } from 'react-icons/fa';
import $ from "jquery";
//import './tableview.css'
import axios from 'axios';
import UserView from './UserView';


class UserTableView extends Component {

    state = {
        users: [],
        results: [],
        displayResults: false
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers = _ => {
        axios.get('http://localhost:5000/users')
            .then(({data}) => {
                console.log(data.data);
                this.setState({users: data.data});
            })
            .catch((err) => {
                console.error(err);
            });
    }

    renderUsers = ({ UserID, Username, Rating, Address}) => <UserView key={UserID} ID={UserID} Username={Username} Rating={Rating} Address={Address}></UserView>

    hangleUsersSearch = (e) => {
        this.filterUsers(e.target.value);
    }


    filterUsers = (search) => {
        if (!search) {
            this.setState({ displayResults: false });
            return;
        }

        const { users } = this.state;

        const results = users.filter((user) => {
            return user.Username.toLowerCase().includes(search.toLowerCase());
        });

        this.setState({ results: results, displayResults: true });
    }

    render()    {
        const { users, results, displayResults } = this.state;
        return (        
            <div>
                <div className="search-div">
                    <label className="icon" class="icon">
                        <FaSearch/>
                    </label>
                    <form>
                        <input className="input" class="input" type="search" placeholder="search" onChange={this.hangleUsersSearch}></input>
                    </form> 
                </div>

                <div>
                    {!displayResults ? users.map(this.renderUsers) : results.map(this.renderUsers)}
                </div>
            </div>
        );
    }
}


export default UserTableView;
