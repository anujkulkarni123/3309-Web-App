import React, { useState, useEffect, Component } from 'react'
import axios from 'axios';
import UsersView from './UsersView';

class PopUsersTable extends Component {
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

    renderUsers= ({ UserID, Username, Rating, TransDone}) => <UsersView key={UserID} UserId={UserID} UserName={Username} Rating={Rating} TransDone={TransDone}></UsersView>

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
                <div>
                    {!displayResults ? users.map(this.renderUsers) : results.map(this.renderTool)}
                </div>
            </div>
        </div>
        );
    }
}

export default PopUsersTable;