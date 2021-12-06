import React, { useState } from 'react';
import { FaChevronCircleDown } from 'react-icons/fa';
import './UserView.css'
import Expand from 'react-expand-animated';
import axios from 'axios';

const UserView =  ({ ID, Username, Rating, TransDone, Address}) => {

    // Necassary variables, clicked is for Expanding, userSpecifics is for the info in the expanded div
    const [clicked, setClicked] = useState(false);
    const [userSpecifics, setUserSpecifics] = useState('');

    // Gets the users from the route
    const displayUserData = (id) => {
        setClicked(!clicked);

        axios.get(`http://localhost:5000/users/${ID}`)
            .then(({data}) => {
                console.log(data)
                if (data.row) {
                    setUserSpecifics(data.row);
                }
            })
            .catch((err) => {
                setUserSpecifics(err.message);
            });
    }

    // What is displayed in the drop down menu
    function renderInfo({ ToolName, Price, ToolType, ForSale, ForRent })  {
        console.log({ToolName});
        return(
        <div key={ID} className="user-expanded">
            <div className="tools-div">
                <label>ToolName: {ToolName}</label>   
                <label>Price: {Price}</label>
                <label>ToolType: {ToolType}</label>
                <label>For Sale: {ForSale}</label>
                <label>For Rent: {ForRent}</label>
            </div>
        </div>
        );   
    }

    // Renders a user
    return (
        <div className="users-container">
            <div className="users-div">
                <label className="id">{ID}</label>
                <label className="usernames">{Username}</label>
                <label className="ratings">stars: {Rating}</label>
                <label className="userAddress">{Address}</label>
                <FaChevronCircleDown className="users-chevron" onClick={() => displayUserData(ID)}/>
            </div>

            <Expand className="userExpand" open={clicked}>
                <div className="expandedDiv">
                    {renderInfo(userSpecifics)}
                </div>
            </Expand>

        </div>
    );
}

export default UserView;
