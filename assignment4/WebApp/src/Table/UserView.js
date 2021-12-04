import React, { useState } from 'react';
import { FaChevronCircleDown } from 'react-icons/fa';
import './Toolview.css';
import Expand from 'react-expand-animated';
import axios from 'axios';

const UserView =  ({ ID, Username, Rating, TransDone, Address}) => {

    const [clicked, setClicked] = useState(false);
    const [userSpecifics, setUserSpecifics] = useState('');

    const displayUserData = (id) => {
        setClicked(!clicked);

        axios.get(`http://localhost:5000/users`)
            .then(({data}) => {
                if (data) {
                    setUserSpecifics(data);
                }
            })
            .catch((err) => {
                setUserSpecifics(err.message);
            });
    }

    return (
        <div className="user-container">
            <div className="user-div">
                <label className="id">{ID}</label>
                <label className="username">{Username}</label>
                <label className="rating">${Rating}</label>
                <label className="address">{Address}</label>
                <FaChevronCircleDown className="user-chevron" onClick={() => displayUserData(ID)}/>
            </div>

            <Expand className="expand" open={clicked}>
                <div className="expandDiv" style={{height: '400px', color: 'red' }}>
                    <div>{userSpecifics.Username}</div>
                    <div>{userSpecifics.Address}</div>
                </div>
            </Expand>

        </div>
    );
}

export default UserView;
