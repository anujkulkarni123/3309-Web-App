import React, { useState, useEffect, Component } from 'react'
import { FaSearch } from 'react-icons/fa';
import $ from "jquery";
import axios from 'axios';

class popUsersTable extends Component {

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

    renderUsers= ({ UserID, Username, Rating}) => <div key={UserID} name={Username} rating={Rating}>NAME: {Username} RATING: {Rating}</div>

    hangleUsersSearch = (e) => {
        this.filterUsers(e.target.value);
    }

    filterUsers = (search) => {
        if (!search) {
            this.setState({ displayResults: false });
            return;
        }

        const { tools } = this.state;

        const results = tools.filter((tool) => {
            return tool.ToolName.toLowerCase().includes(search.toLowerCase());
        });

        this.setState({ results: results, displayResults: true });
    }

    render()    {
        const { users, results, displayResults } = this.state;
        return (
        <div className="body">
        
            <div className="results-container">
                <div className="search-div">
                    <label className="icon" class="icon">
                        <FaSearch/>
                    </label>
                    <form>
                        <input className="input" class="input" type="search" placeholder="search" onChange={this.hangleUsersSearch}></input>
                    </form> 
                </div>

                <div>
                    {!displayResults ? users.map(this.renderTool) : results.map(this.renderTool)}
                </div>
            </div>
        </div>
        );
    }
}

export default popUsersTable;