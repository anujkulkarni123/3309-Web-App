import React, { useState } from 'react';
import { FaChevronCircleDown } from 'react-icons/fa';
//import './Toolview.css';
import Expand from 'react-expand-animated';
import axios from 'axios';
import Cookie from 'js-cookie';

const PersonalView =  ({ ID, Type, Name, Price}) => {

    // Variables needed to show the users personal tools
    const [clicked, setClicked] = useState(false);
    const [userSpecifics, setUserSpecifics] = useState('');

    const displayPTools = (id) => {
        setClicked(!clicked);

        const user = Cookie.get('user');

        // Getting the tools from the route
        axios.get(`http://localhost:5000/user/${user}`)
            .then(({data}) => {
                console.log(data);
                if (data) {
                    setUserSpecifics(data);
                }
            })
            .catch((err) => {
                setUserSpecifics(err.message);
            });
    }

    // Returning the html for each tool
    return (
        <div className="user-container">
            <div className="user-div">
                <label className="id">{ID}</label>
                <label className="type">{Type}</label>
                <label className="name">{Name}</label>
                <label className="price">${Price}</label>
                <FaChevronCircleDown className="user-chevron" onClick={() => displayPTools(ID)}/>
            </div>

            <Expand className="expandUser" open={clicked}>
                <div className="expandDiv" style={{height: '400px', color: 'red' }}>
                </div>
            </Expand>

        </div>
    );
}

export default PersonalView;
