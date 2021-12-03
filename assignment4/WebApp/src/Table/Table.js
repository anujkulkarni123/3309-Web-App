import React, { useState, useEffect, useContext } from 'react';
import ReactPaginate from 'react-paginate';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';
import './table.css'

function Table()
{
        //initializing state
        const [ tools, setTools ] = useState([])

        //initializing use state
        const [ search, setSearch ] = useState(' ')

  const [pagination, setPagination] = useState({
            data: tools.map(({ ToolID, ToolType, ToolName, UserID, CompanyID, Price, ForSale, ForRent }, index) => (({
                id: ToolID,
                name: ToolName,
                type: ToolType,
                user: UserID,
                company: CompanyID,
                price: Price,
                forSale: ForSale,
                forRent: ForRent
              }))),
            offset: 0,
            numberPerPage: 10,
            pageCount: 0,
            currentData: []
          });

          useEffect(() => {
            setPagination((prevState) => ({
              ...prevState,
              pageCount: prevState.data.length / prevState.numberPerPage,
              currentData: prevState.data.slice(pagination.offset, pagination.offset + pagination.numberPerPage)
            }))
          }, [pagination.numberPerPage, pagination.offset])

          const handlePageClick = event => {
            const selected = event.selected;
            const offset = selected * pagination.numberPerPage
            setPagination({ ...pagination, offset })
          }

            //handling change in input
        const handleChange = e =>   {
          if (e.target.value) {
            setSearch(e.target.value);
            console.log(search);
            axios.get(`http://localhost:3000/tools/${search}`)
              .then((response) => {
                const tools = response.data.tools;
                setTools([...tools]);
              })
              .catch((err) => {
                console.error(err);
              });
          }
        }

    //filters through coins
        const filteredTools = tools.filter(tools =>
            axios(`http://localhost:3000/tools/${search}`)
              .then((response) => {
                console.log(response);
                setTools(response.tools);
              })
        )

        return (
            <div>
                <div className="search-div">
                    <label className="icon">
                        <FaSearch/>
                    </label>
                    <form>
                        <input className="input" placeholder="search" onChange={handleChange}></input>
                    </form>
                </div>
            {pagination.currentData && pagination.currentData.map(((item, index) => (
              <div className="post" key={item.id}>
                  <h3>{`${item.name} - ${item.price}`}</h3>
                  <p>{item.toolType}</p>
                  <p>
                    { item.forSale ? 'Sale' : 'Rent' }
                  </p>
                </div>
              )))
              }
              <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                pageCount={pagination.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
              />
            </div>
          );

}

export default Table;
