import React, { useState } from 'react';
import { FaChevronCircleDown } from 'react-icons/fa';
import './Toolview.css';
import Expand from 'react-expand-animated';
import axios from 'axios';


const ToolView =  ({ ID, Type, Name, UserID, CompanyID, Price}) => {
    const [clicked, setClicked] = useState(false);
    const [toolSpecifics, setToolSpecifics] = useState('');

    const displayToolData = (id) => {
        setClicked(!clicked);

        axios.get(`http://localhost:5000/tools/${ID}`)
            .then(({data}) => {
                if (data.row) {
                    setToolSpecifics(data.row);
                    console.log(data.row);
                }
            })
            .catch((err) => {
                // setToolSpecifics(err.message);
                console.error(err);
            });
    }

    function renderInfo({ Username, ForSale, ForRent, Address })  {
        return(
        <div key={ID} className="tool-expanded">
            <div className="left-div">
                <label>Owner: {Username}</label>   
                <label>For Rent: {ForRent}</label>
            </div>
            <div className="right-div">
                <label>Address: {Address}</label>
                <label>For Sale: {ForSale}</label>
            </div>
            
        </div>
        );   
    }

    return (
        <div className="tool-container">
            <div className="tool-div">
                <label className="id">{ID}</label>
                <label className="name">Name: {Name}</label>
                <label className="price">${Price}</label>
                <label className="type">Type: {Type}</label>
                <FaChevronCircleDown className="icon-chevron" onClick={() => displayToolData(ID)}/>
            </div>

            <Expand className="expand" open={clicked}>
                <div className="expandDiv">
                    {renderInfo(toolSpecifics)}
                </div>
            </Expand>

        </div>
    );
}

export default ToolView;
