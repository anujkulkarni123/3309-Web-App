import React, { Component, useState } from 'react';
import { FaChevronCircleDown } from 'react-icons/fa';
import Expand from 'react-expand-animated';
import './Toolview.css';
import $ from "jquery";

const ToolView =  ({ ID, Type, Name, UserID, CompanyID, Price, ForSale, ForRent}) => {

    const [clicked, setClicked] = useState(false);
    
    
    return (
        <div className="tool-container">
            <div className="tool-div">
                <label className="id">{ID}</label>
                <label className="name">{Name}</label>
                <label className="price">{Price}</label>
                <label className="type">{Type}</label>
                <FaChevronCircleDown className="icon" onClick={() => setClicked(!clicked)}/>
            </div>

            <Expand className="expand" open={clicked}>
                <div className="expandDiv" style={{height: '400px', color: 'red' }}></div>
            </Expand>
           
        </div>
    );
}

export default ToolView;
