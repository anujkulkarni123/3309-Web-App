import React, {Component} from 'react';
import './header.css';
import { MenuItems } from "./MenuItems";
import {FaSignInAlt} from "react-icons/fa";

class Header extends Component{


    render()    {
        return(
            <div className="container">

                <div className="title">
                    <label style={{ fontSize: 30, }}>
                        RENTRABBIT
                    </label>
                </div>

                <nav className="NavbarItems">
                    <div className="nav-menu">
                        {MenuItems.map((item, index) => {
                            return (
                                <div key={index} className="nav-icon-div">
                                    <a className="nav-icon" href={item.url} onClick={item.logout}>
                                        {item.icon}
                                    </a>
                                </div>
                            )
                        })}
                        <div>
                            <FaSignInAlt className="nav-icon" onClick={} />
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
