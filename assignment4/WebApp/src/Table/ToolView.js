import React, { Component } from 'react';
import { FaChevronCircleDown } from 'react-icons/fa';
import './Toolview.css';

const ToolView =  ({ ID, Type, Name, UserID, CompanyID, Price, ForSale, ForRent}) => {
    
    
    return (
        <div className="tool-container">
            <div className="tool-div">
                <label className="id">{ID}</label>
                <label className="name">{Name}</label>
                <label className="price">${Price}</label>
                <label className="type">{Type}</label>
                <FaChevronCircleDown className="drop-icon" />
            </div>
           
        </div>
    );
}

export default ToolView;
