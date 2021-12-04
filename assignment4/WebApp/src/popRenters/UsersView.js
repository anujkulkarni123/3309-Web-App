import React from 'react'
import './UsersView.css'


const UsersView = ({ UserId, UserName, Rating, TransDone}) =>{
    
    return (
        <div className="user-container">
            <div className="user-div">
                <label>{UserId}</label>
                <label>{UserName}</label>
                <label>{Rating}</label>
                <label>Trans: {TransDone}</label>
            </div>
        </div>
    ); 
}

export default UsersView;

