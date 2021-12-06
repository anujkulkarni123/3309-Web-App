import axios from 'axios';
import React, { Component } from 'react'
import Cookies from 'js-cookie'
import PersonalTable from '../PersonalTools/PersonalTable';

class FavTable extends Component {

    state = {
        username: Cookies.get('user'),
        favTools: [],
    }

    componentDidMount() {
        this.getFavTools();
    }

    getFavTools = () =>    {
        const{ username } = this.state;
        axios.get(`http://localhost:5000/fav/${username}`)
            .then(({data}) =>   {
                console.log(data);
                this.setState({favTools: data.data});
            })
            .catch((err) => {
                console.error(err);
            });
    }

    //renders tool
    renderFavTool = ({ ToolName, Price, ToolType, ForSale, ForRent }) => 
        <div>
            <label>{ToolName}</label>
            <label>${Price}</label>
            <label>{ToolType}</label>
            <label>{ForSale}</label>
            <label>{ForRent}</label>
        </div>

    render()    {
        const { favTools } = this.state;
        return (
            <div>
                {favTools.map(this.renderFavTool)}
            </div>
        );
    }
    
}

export default FavTable;