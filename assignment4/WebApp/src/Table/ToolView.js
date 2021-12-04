import React, { Component, useState } from 'react';
import { FaChevronCircleDown } from 'react-icons/fa';
import Expand from 'react-expand-animated';
import './Toolview.css';
import $ from "jquery";

const ToolView =  ({ ID, Type, Name, UserID, CompanyID, Price, ForSale, ForRent}) => {


    $(function()    {
        $(".iconChevron").click(function() {
            $(".downClick").toggleClass("active");
        });
    });
    
    
    return (
        <div className="tool-container">
            <div className="tool-div">
                <label className="id">{ID}</label>
                <label className="name">{Name}</label>
                <label className="price">{Price}</label>
                <label className="type">{Type}</label>
                <FaChevronCircleDown className="iconChevron" class="downClick"/>
            </div>

           
        </div>
    );
}

export default ToolView;
