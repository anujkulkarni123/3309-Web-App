import React, { useState } from 'react';
import { FaChevronCircleDown, FaHeart } from 'react-icons/fa';
import './Toolview.css';
import Expand from 'react-expand-animated';
import axios from 'axios';
import Cookies from 'js-cookie';
import $ from 'jquery'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate
  } from "react-router-dom";

const ToolView =  ({ ID, Type, Name, UserID, CompanyID, Price}) => {
    // Needed Variables, clicked is used for the drop down, toolSpecifics is used for the info in the drop down
    const [clicked, setClicked] = useState(false);
    const [toolSpecifics, setToolSpecifics] = useState('');

    let navigate = useNavigate();
    const [errMsg, setErrMsg] = useState('');

    const displayToolData = (id) => {
        setClicked(!clicked);

        // Gets the tools from the route
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

    const buyTool = (id) => {
        // tell user to log in if they are not
        if (!Cookies.get('user')) {
            alert('Need to be Logged in to do that!');
            return;
        }

        axios.get(`http://localhost:5000/buy?username='${Cookies.get('user')}'&toolID='${id}'`)
            .then(({ data }) => {
                if (!data.success) {
                    console.log('redirecting...');
                    alert(data.message);
                    navigate('/App');
                    return;
                }

                // display success message
            })
            .catch((err) => {
                throw err;
            });

            // buyTool(data, setErrMsg, navigate);

    }

    function handleHeartClick() {

    }

    // Renders the info in the drop down
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

            <div>
                <label>ID: {ID}</label>
            </div>

        </div>
        );
    }

    // Renders a tool
    return (
        <div className="tool-container">
            <div className="tool-div">
                <label className="name">Name: {Name}</label>
                <label className="price">${Price}</label>
                <label className="type">Type: {Type}</label>
                <FaHeart className="icon-heart"/>
                <FaChevronCircleDown className="icon-chevron" onClick={() => displayToolData(ID)}/>
            </div>

            <Expand className="expand" open={clicked}>
                <div className="expandDiv">
                    {renderInfo(toolSpecifics)}
                    <div>
                    <button className="buy-btn" onClick={() => buyTool(ID)}>Buy Tool</button>
                    <button className="rent-btn">Rent Tool</button>
                    </div>
                </div>
            </Expand>

        </div>
    );
}

export default ToolView;
