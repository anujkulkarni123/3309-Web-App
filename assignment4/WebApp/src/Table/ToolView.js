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

        axios.get(`http://localhost:5000/tools/${UserID}`)
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
        return  (
            <div key={UserID}>
                <label>{Username}</label>
                <label>{ForRent}</label>
                <label>{Address}</label>
                <label>{ForSale}</label>
            </div>
        );

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
                    {renderInfo(toolSpecifics)}
                </div>

            </Expand>

        </div>
    );
}

export default ToolView;
