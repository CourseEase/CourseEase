import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './admin.css';
import '../../../../css/buttons.css';

import VideoForm from '../../VideoForm/VideoForm';
import ButtonStyle2 from '../../Buttons/ButtonStyle2';

import {Courses, Materials} from '../../UserMenu/Menu';


function Admin(props) {
    return (
        <>
         <Router>
         <div className="header d-flex justify-content-between">
          <div className='d-flex align-items-center'>
            <div className='exit-cont'>
              <span className="material-symbols-outlined exit-icon">
                logout
              </span>
            </div>
            <p className='subject-title'>Subject Title</p>
          </div>
          {/* <div className='d-flex align-items-center'>
            <p className='subject-title'>Subject Title</p>
          </div> */}
          <div className='d-flex align-items-center'>
            Dependes on route
          </div>
          <div className='d-flex align-items-center' style={{marginRight: '30px'}}>
            <div style={{marginRight: '5px'}}>
              Dependes on route
            </div>
            <div>
              Dependes on route
            </div>
          </div>
        </div>

          <div className='main-wrapper'>
            <div className='tools-wrapper'>


            <div className='side-bar'>
              <div className='tool-cont'>
                <ButtonStyle2 looks='icon-logo'>T</ButtonStyle2>
              </div>
              <div className='tool-spread'>

                <hr></hr>
                <Link to="/test/admin-panel"> Home</Link>
                <hr></hr>
                <Link to="/test/admin-panel/courses"> Courses</Link>
                <hr></hr>
                <Link to="/test/admin-panel/quizzes"> Quizzes</Link>
                <hr></hr>
                <Link to="/test/admin-panel/materials"> Materials</Link>
                <hr></hr>
                <Link to="/test/admin-panel/lesson"> About</Link>
                <hr></hr>

                {/* <SideAction title="Tool Title" /> */}
              </div>
            </div>

            </div>
            <div className='content-wrapper'>
              <Routes>
                <Route path='/test/admin-panel' element={<Courses/>}/>
                <Route path='/test/admin-panel/courses' element={<Materials/>}/>
                
                <Route path='/test/admin-panel/materials' element={<h3>Materials</h3>}/>
                <Route path='/test/admin-panel/quizzes' element={<h3>Quizzes</h3>}/>
                <Route path='/test/admin-panel/lesson' element={<VideoForm/>}/>

              </Routes>
            </div>
          </div>

         </Router>
        </>
    );
}

export default Admin;

