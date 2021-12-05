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
        axios.get('http://localhost:5000/popularUsers')
            .then(({data}) => {
                console.log(data.data);
                this.setState({users: data.data});
            })
            .catch((err) => {
                console.error(err);
            });
    }

    renderUsers= ({ UserID, Username, Rating, TransDone, TransactionDate}) => <UsersView key={UserID} UserId={UserID} UserName={Username} Rating={Rating} TransDone={TransDone} TransactionDate={TransactionDate}></UsersView>


    render()    {
        const { users, results, displayResults } = this.state;
        return (
        <div className="pop-users-container">
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