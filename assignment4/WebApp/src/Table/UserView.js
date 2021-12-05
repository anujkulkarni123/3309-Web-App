import React, { useState } from 'react';
import { FaChevronCircleDown } from 'react-icons/fa';
//import './Toolview.css';
import Expand from 'react-expand-animated';
import axios from 'axios';

const UserView =  ({ ID, Username, Rating, TransDone, Address}) => {

    const [clicked, setClicked] = useState(false);
    const [userSpecifics, setUserSpecifics] = useState('');

    const displayUserData = (id) => {
        setClicked(!clicked);

        axios.get(`http://localhost:5000/users/${ID}`)
            .then(({data}) => {
                if (data) {
                    setUserSpecifics(data);
                }
            })
            .catch((err) => {
                setUserSpecifics(err.message);
            });
    }

    function renderInfo({ ToolName, Price, ToolType, ForSale, ForRent })  {
        console.log({ToolName});
        return(
        <div key={ID} className="user-expanded">
            <div className="left-div">
                <label>ToolName: {ToolName}</label>   
                <label>Price: {Price}</label>
                <label>ToolType: {ToolType}</label>
            </div>
            <div className="right-div">
                <label>For Sale: {ForSale}</label>
                <label>For Rent: {ForRent}</label>
            </div>
        </div>
        );   
    }

    return (
        <div className="user-container">
            <div className="user-div">
                <label className="id">{ID}</label>
                <label className="username">{Username}</label>
                <label className="rating">stars: {Rating}</label>
                <label className="address">{Address}</label>
                <FaChevronCircleDown className="user-chevron" onClick={() => displayUserData(ID)}/>
            </div>

            <Expand className="expand" open={clicked}>
                <div className="expandDiv">
                    {renderInfo(userSpecifics)}
                </div>
            </Expand>

        </div>
    );
}

export default UserView;
