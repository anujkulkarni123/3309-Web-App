import './table.css'
import React, { useState, useEffect, useContext } from 'react';
import ReactPaginate from 'react-paginate';

function Table()
{
        //initializing state
        const [ tools, setTools ] = useState([])

        //initializing use state
        const [ search, setSearch ] = useState(' ')

        const [pagination, setPagination] = useState({
            data: new Array().fill().map((value, index) => (({
                id: tools,
                title: tools.name,
                body: tools.price
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
            setSearch(e.target.value);
        }

    //filters through coins
        const filteredTools = tools.filter(tools =>
            tools.name.toLowerCase().includes(search.toLowerCase())
        )

        return (
            <div>
              {pagination.currentData && pagination.currentData.map(((item, index) => (
                <div className="post">
                  <h3>{`${item.title} - ${item.id}`}</h3>
                  <p>{item.body}</p>
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

    export default Table;
}