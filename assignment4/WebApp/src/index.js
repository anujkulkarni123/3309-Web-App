import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import App from './App';
import Login from './Login';
import User from './User';
// import InsertTools from './insertTools/InsertTool';
import TableView from './Table/TableView';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/App" element={<App />}></Route>
<<<<<<< HEAD
        <Route path="/" element={<InsertTools />}></Route>
        <Route path="/insertTool" element={<InsertTools />}></Route>
=======
        <Route path="/" element={<Login />}></Route>
        {/*<Route path='/InsertTool' element={<InsertTools />}></Route>*/}
        <Route path="/User" element={<User />}></Route>
>>>>>>> 287ca5048ed74126880cdc8d17ecabc625d04512
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

