import React, { useState } from 'react';
import { FaChevronCircleDown } from 'react-icons/fa';
import './Toolview.css';
import Expand from 'react-expand-animated';
import axios from 'axios';

const ToolView =  ({ ID, Type, Name, UserID, CompanyID, Price, ForSale, ForRent}) => {

    const [clicked, setClicked] = useState(false);
    const [toolSpecifics, setToolSpecifics] = useState('');

    const displayToolData = (id) => {
        setClicked(!clicked);

        axios.get(`http://localhost:5000/tools/${ID}`)
            .then(({data}) => {
                if (data) {
                    setToolSpecifics(data);
                }
            })
            .catch((err) => {
                setToolSpecifics(err.message);
            });
    }

    return (
        <div className="tool-container">
            <div className="tool-div">
                <label className="id">{ID}</label>
                <label className="name">{Name}</label>
                <label className="price">${Price}</label>
                <label className="type">{Type}</label>
                <FaChevronCircleDown className="icon-chevron" onClick={() => displayToolData(ID)}/>
            </div>

            <Expand className="expand" open={clicked}>
                <div className="expandDiv" style={{height: '400px', color: 'red' }}>
                    <div>{toolSpecifics.Username}</div>
                    <div>{toolSpecifics.Address}</div>
                </div>
            </Expand>

        </div>
    );
}

export default ToolView;
