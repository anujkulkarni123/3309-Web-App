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


$(function()    {
        $(".icon").click(function() {
            $(".input").toggleClass("active");
        });
});

const comboboxData = [ "ToolName", "Price", "ToolType" ];

class TableView extends Component {
    
    state = {
        column: "ToolID",
        tools: [],
        results: [],
        displayResults: false
    }

    componentDidMount() {
        this.getTools();
    }


    

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
    
    handleFilterChange(e)    {
        console.log(e);
        this.setState({column: e});
        this.getTools();
    }

    renderTool = ({ ToolID, ToolName, Price, ToolType, UserID }) => <ToolView key={ToolID} ID={ToolID} Name={ToolName} Price={Price} Type={ToolType} UserID={UserID}></ToolView>

    handleToolSearch = (e) => {
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
