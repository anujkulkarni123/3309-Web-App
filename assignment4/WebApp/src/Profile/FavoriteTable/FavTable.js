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
                console.log(data.data);
                this.setState({favTools: data.data.tools});
            })
            .catch((err) => {
                console.error(err);
            });
    }

    renderFavTool = ({ToolID, ToolName, Price, ToolType, UserID, ForSale, ForRent }) => 
                    <PersonalTable key={ToolID} ID={ToolID} Name={ToolName} Price={Price} 
                    Type={ToolType} UserID={UserID} isForRent={ForRent} isForSale={ForSale}/>
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