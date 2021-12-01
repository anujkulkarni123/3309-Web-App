import './table.css'
import React, { useState, useEffect, useContext } from 'react';

function Table()
{
        //initializing state
        const [ tools, setTools ] = useState([])

        //initializing use state
        const [ search, setSearch ] = useState(' ')

            //handling change in input
        const handleChange = e =>   {
            setSearch(e.target.value);
        }

    //filters through coins
        const filteredTools = tools.filter(tools =>
            tools.name.toLowerCase().includes(search.toLowerCase())
        )

        return(
            <div> 
                {filteredTools.map(tools =>  {
                    return(
                        <Tool />
                    );
                })}
            </div>
        );
}