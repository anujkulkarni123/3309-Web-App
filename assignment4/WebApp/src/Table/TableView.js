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

    hangleToolSearch = (e) => {
        this.filterTools(e.target.value);
    }
    filterTools = (search) => {
        const { tools } = this.state;

        const results = tools.filter((tool) => {
            return tool.ToolName.toLowerCase().includes(search.toLowerCase());
        });

        this.setState({ tools: results });
    }

    render()    {
        const { tools } = this.state;
        return (
        <div className="body">
        
            <div className="results-container">
                <div className="search-div">
                    <label className="icon" class="icon">
                        <FaSearch/>
                    </label>
                    <input className="input" class="input" type="search" placeholder="search" onChange={this.hangleToolSearch}></input>
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
