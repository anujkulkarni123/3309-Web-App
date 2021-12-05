import React, { useState, useEffect, Component } from 'react'
import Cookie from 'js-cookie';
import PersonalTable from './PersonalTable';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate
  } from "react-router-dom";
import "./personalTools.css"

class PersonalTableView extends Component {

    // States needed for showing the users personal tools
    state = {
        pTools: [],
        results: [],
        displayResults: false
    }

    componentDidMount() {
        this.getPersonalTools();
    }

    //Gets the users tools from the route
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
    
    // Renders each tool
    renderPTools = ({ UserID, ToolType, ToolName, Price}) => <PersonalTable key={UserID} ID={UserID} Type={ToolType} Name={ToolName} Price={Price}></PersonalTable>

    // Loops through the pTools array which holds each users personal tools
    render()    {
        const { pTools, results, displayResults } = this.state;
        return (
            <div className="listed-tools">
                <div>
                    <button className="addtool-btn"><Link className='addtool-btn' to="/InsertTool">Add Tool</Link></button>
                </div>
                {displayResults ? pTools.map(this.renderPTools) : results.map(this.renderPTools)}
            </div>
        );
    }
}

export default PersonalTableView;
