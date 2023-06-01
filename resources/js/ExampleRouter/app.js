import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NoPage from '../components/ErrorPage/NoPage';


if (document.getElementById('test_app')){
  ReactDOM.render(
    <>
        <Router>
        <nav>
          <ul>
            <li>
              <Link to="/test">Home</Link>
            </li>
            <li>
              <Link to="/test/about">About</Link>
            </li>
          </ul>
        </nav>
            <Routes>
                <Route path="/test/*" element={<NoPage/>} />
                <Route path="/test" element={<Home/>} />
                <Route path="/test/about" element={<About/>} />

                {/* Add more routes here */}
            </Routes>
        </Router>
  </>
  ,
  document.getElementById('test_app')
);
}


