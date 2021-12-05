import axios from 'axios';
import React, { Component } from 'react'

class FavTable extends Component {

    state = {
        username: "jayson",
        tools: [],
    }

    componentDidMount() {
        this.getFavTools();
    }

    getFavTools = () =>    {
        const{ username } = this.state;
        axios.get(`http://localhost:5000/fav/${username}`)
            .then(({data}) =>   {
                console.log(data.data);
                this.setState({tools: data.data, displayResults: false});
            })
            .catch((err) => {
                console.error(err);
            });
    }

    renderFavTool = ({})
    render()    {
        return (
            <div>
                    
            </div>
        );
    }
    
}

export default FavTable;