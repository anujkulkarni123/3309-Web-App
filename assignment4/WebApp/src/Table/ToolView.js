import React, { Component } from 'react'

const ToolView =  ({ ToolID, Type, Name, UserID, CompanyID, Price, ForSale, ForRent}) => {
    
    
    return (
        <div className="tool-container">
            <label className="id">{ToolID}</label>
            <label className="name">{Name}</label>
            <label className="type">{Type}</label>
        </div>
    );
}

export default ToolView;
