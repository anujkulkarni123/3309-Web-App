import React, { useState, useEffect, Component, } from 'react'
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
    
    /** //initializing states
    const [ tools, setTools ] = useState([]);

    const [ search, setSearch] = useState(' ')

    useEffect(() => {
        axios.get(`http://localhost:5000/tools`)
            .then(res =>    {
                setTools(res.data)
            }).catch(err => console.log(err))
    }, []);
    
    const filteredTools = tools.filter(tool =>
        tool.name.toLowerCase().includes(search.toLowerCase())
    )

    */

    state = {
        tools: []
    }

    componentDidMount() {
        this.getTools();
    }

    getTools = _ => {
        fetch('http://localhost:5000/tools')
            .then(response => response.json())
            .then(({ data }) => {
                console.log("hello");
                console.log(data)
                
            })
            .catch(err => console.error(err))
    }

    renderTool = ({ ToolID, ToolName}) => <div key={ToolID} name={ToolName}>{ToolName}</div>

    render()    {
        const { tools } = this.state;
        return (
        <div className="body">
            <div className="search-div">
                <label className="icon" class="icon">
                    <FaSearch/>
                </label>
                <input className="input" class="input" type="search" placeholder="search"></input>
            </div>

            <div>
                {tools.map(this.renderTool)}
            </div>
        </div>
    );
    }
    
    
    
}

export default TableView;
