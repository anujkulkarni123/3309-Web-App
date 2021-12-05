import React, { useState, useEffect, Component } from 'react'
import { FaSearch } from 'react-icons/fa';
import $ from "jquery";
import './tableview.css'
import axios from 'axios';
import ToolView from './ToolView';
import ComboBox from 'react-responsive-combo-box'
import 'react-responsive-combo-box/dist/index.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate
  } from "react-router-dom";

// Used for the search bar at the top, makes it expand if a user clicks on it
$(function()    {
        $(".icon").click(function() {
            $(".input").toggleClass("active");
        });
});

// Three titles in the sorting combo box
const comboboxData = [ "ToolName", "Price", "ToolType" ];

class TableView extends Component {
    
    // Needed states
    state = {
        column: "ToolID",
        tools: [],
        results: [],
        displayResults: false
    }

    componentDidMount() {
        this.getTools();
    }

    // Gets all the avalible tools from the route
    getTools = () => {
        const { column } = this.state;
        axios.get(`http://localhost:5000/tools/order/${column}`)
            .then(({data}) => {
                console.log(data.data);
                this.setState({tools: data.data, displayResults: false});
            })
            .catch((err) => {
                console.error(err);
            });
    }
    
    // Changes how the filter is sorting the tools
    handleFilterChange(e)    {
        console.log(e);
        this.setState({column: e});
        this.getTools();
    }

    // Render a tool
    renderTool = ({ ToolID, ToolName, Price, ToolType, UserID }) => <ToolView key={ToolID} ID={ToolID} Name={ToolName} Price={Price} Type={ToolType} UserID={UserID}></ToolView>

    // Calls the filterTools function when the user clicks the search button
    handleToolSearch = (e) => {
        this.filterTools(e.target.value);
    }

    // Fills the results array with the avalible tools that match what the user entered into the search bar
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

    // Rendering all the avalible tools, search bar, and combo-box filter
    render()    {
        const { tools, results, displayResults } = this.state;
        return (        
            <div>
                <div className="filter-div">
                    <div className="search-div">
                        <label className="icon" class="icon">
                            <FaSearch/>
                        </label>
                        <form>
                            <input className="input" class="input" type="search" placeholder="search" onChange={this.handleToolSearch}></input>
                        </form> 
                    </div>

                    <div className="sort-div">
                        <div classname="sort-label">
                            <label >Sort By:</label> 
                        </div>
                        <ComboBox id="combo-box" class="combo-box" options={comboboxData} onOptionsChange={this.handleFilterChange.bind(this)} enableAutocomplete/>
                    </div>

                    <div>
                        <button className='addtool-btn'><Link to="/InsertTool">Add Tool</Link></button>
                    </div>
                </div>

                <div>
                    {!displayResults ? tools.map(this.renderTool) : results.map(this.renderTool)}
                </div>
            </div>
        );
    }
}


export default TableView;
