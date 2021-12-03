import React, {Component} from 'react';
import { FaSearch } from 'react-icons/fa';
import $ from "jquery";
import './header.css';

class Header extends Component{


    render()    {
        return( 
            <div className="container">

                <div className="title">
                    <label style={{ fontSize: 30, }}>
                        RENTRABBIT
                    </label>
                </div>         
            </div>
        );
    }
}

export default Header;
