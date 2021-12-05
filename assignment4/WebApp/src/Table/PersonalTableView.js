import React, { useState, useEffect, Component } from 'react'
import { FaSearch } from 'react-icons/fa';
import Cookie from 'js-cookie';
import PersonalView from './PersonalView';
import axios from 'axios';

class PersonalTableView extends Component {

    state = {
        pTools: [],
        results: [],
        displayResults: false
    }

    componentDidMount() {
        this.getPersonalTools();
    }

    getPersonalTools = _ => {
        const user = Cookie.get('user');
        axios.get(`http://localhost:5000/user/${user}`)
            .then(({data}) => {
                console.log(data.data);
                this.setState({pTools: data.data.tools, displayResults: true});
            })
            .catch((err) => {
                console.error(err);
            });
    }

    renderPTools = ({ UserID, ToolType, ToolName, Price}) => <PersonalView key={UserID} ID={UserID} Type={ToolType} Name={ToolName} Price={Price}></PersonalView>


    render()    {
        const { pTools, results, displayResults } = this.state;
        return (
            <div>
                <div>
                    {displayResults ? pTools.map(this.renderPTools) : results.map(this.renderPTools)}
                </div>
            </div>
        );
    }
}


export default PersonalTableView;
