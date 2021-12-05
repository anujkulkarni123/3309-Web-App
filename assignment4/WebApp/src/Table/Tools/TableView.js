import React, { useState, useEffect, Component } from 'react'
import { FaSearch, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
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
import Paginate from 'react-paginate';


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
        displayResults: false,
        perPage: 10,
        currentPage: 0,
        offset: 0,
        search: ''
    }

    componentDidMount() {
        this.getTools();
    }

    getTools = () => {
        const { column, results } = this.state;
        if (results) {
            const slice = results.slice(this.state.offset, this.state.offset + this.state.perPage);
            this.setState({
                results: slice,
                pageCount: Math.ceil(results.length / this.state.perPage)
            })
        }

        axios.get(`http://localhost:5000/tools/order/${column}`)
            .then(({data}) => {
                console.log(data.data);
                const slice = data.data.slice(this.state.offset, this.state.offset + this.state.perPage);
                this.setState({
                    tools: slice,
                    displayResults: false,
                    pageCount: Math.ceil(data.data.length / this.state.perPage)
                });
            })
            .catch((err) => {
                console.error(err);
            });
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.getTools();
        });
    }

    handleFilterChange(e)    {
        console.log(e);
        this.setState({column: e});
        this.getTools();
    }

    renderTool = ({ ToolID, ToolName, Price, ToolType, UserID }) => <ToolView key={ToolID} ID={ToolID} Name={ToolName} Price={Price} Type={ToolType} UserID={UserID}></ToolView>

    handleToolSearch = () => {
        this.setState(this.state.search)
        this.filterTools(this.state.search);
    }

    filterTools = (search) => {
        if (!search) {
            this.setState({ displayResults: false });
            return;
        }

        const { tools } = this.state;

        const results = tools.filter((tool) => {
            this.setState({
                currentPage: 0
            });
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
                    <Paginate
                        previousLabel={<FaArrowLeft style={{ color: 'var(--header)' }}/>}
                        nextLabel={<FaArrowRight style={{ color: 'var(--header)' }} />}
                        breakLabel={"..."}
                        pageCount={this.state.pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"pg-active"}
                    />
                </div>
            </div>
        );
    }
}


export default TableView;
