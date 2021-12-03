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
        tools: [],
        results: [],
        displayResults: false
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

    renderTool = ({ ToolID, ToolName, Price, ToolType}) => <ToolView key={ToolID} ID={ToolID} Name={ToolName} Price={Price} Type={ToolType}></ToolView>

    hangleToolSearch = (e) => {
        this.filterTools(e.target.value);
    }

    filterTools = (search) => {
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
        const { tools, results, displayResults } = this.state;
        return (
        <div className="body">
        
            <div className="results-container">
                <div className="search-div">
                    <label className="icon" class="icon">
                        <FaSearch/>
                    </label>
                    <form>
                        <input className="input" class="input" type="search" placeholder="search" onChange={this.hangleToolSearch}></input>
                    </form> 
                </div>

                <div>
                    {!displayResults ? tools.map(this.renderTool) : results.map(this.renderTool)}
                </div>
            </div>
        </div>
        );
    }
}

export default TableView;
