import React, {Component} from 'react';
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
                    <div className="nav-menu">
                        {MenuItems.map((item, index) => {
                            return (
                                <div key={index} className="nav-icon-div">
                                    <a className="nav-icon" href={item.url}>
                                        {item.icon}
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </nav>       
            </div>
        );
    }
}

export default Header;
