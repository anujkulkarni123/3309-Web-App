import React, {Component} from 'react';
import { FaSearch } from 'react-icons/fa';
import $ from "jquery";
import './header.css';



function handleClick()  {
    alert("Label Clicked")
}

$(function()    {
    $(".icon").click(function() {
        $(".input").toggleClass("active");
    });
});

class Header extends Component{
    
    state = { open: false };

    toggle = () => {
        this.setState(prevState => ({ open: !prevState.open }));
    };

    render()    {
        return( 
            <div className="container">
                
                <div className="search-div">
                    <label className="icon" class="icon" onClick={this.toggle}>
                        <FaSearch/>
                    </label>
                    <input className="input" class="input" type="search" placeholder="search"></input>
                </div>

                <div className="title" onClick={handleClick}>
                    <label style={{ fontSize: 30, }}>
                        RENTRABBIT
                    </label>
                </div>     

                <div>
                    <button className="logout-btn">LogOut</button>
                </div>  
                    
            </div>
        );
    };
}

export default Header;
