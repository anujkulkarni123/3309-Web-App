import React, { useState, useEffect, Component } from 'react'
import { FaSearch } from 'react-icons/fa';
import $ from "jquery";
import './tableview.css'
import axios from 'axios';
import ToolView from './ToolView';

$(function()    {
        $(".icon").click(function() {
            $(".input").toggleClass("active");
        });
    });

class TableView extends Component {

    state = {
        tools: []
    }

    componentDidMount() {
        this.getTools();
    }

    getTools = _ => {
        axios.get('http://localhost:5000/tools')
            .then(({data}) => {
                console.log(data.data);
                this.setState({tools: data.data});
            })
            .catch((err) => {
                console.error(err);
            });
    }

    renderTool = ({ ToolID, ToolName}) => <div key={ToolID} name={ToolName}>{ToolName}</div>

    render() {
        const { tools } = this.state;
        return (
            <div className="body">
                <div className="results-container">
                    <div className="search-div">
                        <label className="icon">
                        <FaSearch/>
                        </label>
                    <input className="input" type="search" placeholder="search"></input>
                    </div>

                    <div>
                    {tools.map(this.renderTool)}
                    </div>
                </div>
            </div>
        );
    }
}

export default TableView;
