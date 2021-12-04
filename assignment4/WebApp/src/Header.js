import React, {Component} from 'react';
import { FaSearch } from 'react-icons/fa';
import $ from "jquery";
import './header.css';
import { MenuItems } from "./MenuItems";

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
                    <ul className="nav-menu">
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>       
            </div>
        );
    }
}

export default Header;
