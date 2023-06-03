import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './admin.css';
import '../../../../css/buttons.css';

import VideoForm from '../../VideoForm/VideoForm';
import ButtonStyle1 from '../../Buttons/ButtonStyle1';
import ButtonStyle2 from '../../Buttons/ButtonStyle2';
import ButtonStyle3 from '../../Buttons/ButtonStyle3';
import LessonDropdown from '../../LessonDropdown/LessonDropdown';


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
            <p className='subject-title'>
              <Routes>
                <Route path='/test/admin-panel/*' element={'panel'}/>
                <Route path='/test/admin-courses/*' element={'courses'}/>
                <Route path='/test/admin-materials/*' element={'materials'}/>
                <Route path='/test/admin-quizzes/*' element={'quizzes'}/>
              </Routes>
              </p>
          </div>
          {/* <div className='d-flex align-items-center'>
            <p className='subject-title'>Subject Title</p>
          </div> */}
          <div className='d-flex align-items-center'>
          <Routes>
                <Route path='/test/admin-panel/*' element={'panel'}/>
                <Route path='/test/admin-courses/*' element={'courses'}/>
                <Route path='/test/admin-materials/*' element={'materials'}/>
                <Route path='/test/admin-quizzes/*' element={'quizzes'}/>
              </Routes>
          </div>
          <div className='d-flex align-items-center' style={{marginRight: '30px'}}>
            <div style={{marginRight: '5px'}}>
            <Routes>
                <Route path='/test/admin-panel/*' element={'panel'}/>
                <Route path='/test/admin-courses/*' element={'courses'}/>
                <Route path='/test/admin-materials/*' element={'materials'}/>
                <Route path='/test/admin-quizzes/*' element={'quizzes'}/>
              </Routes>
            </div>
            <div>
            <Routes>
                <Route path='/test/admin-panel/*' element={'panel'}/>
                <Route path='/test/admin-courses/*' element={'courses'}/>
                <Route path='/test/admin-materials/*' element={'materials'}/>
                <Route path='/test/admin-quizzes/*' element={'quizzes'}/>
              </Routes>
            </div>
          </div>
        </div>

          <div className='main-wrapper'>
            <div className='tools-wrapper'>

            {/* Sidebar Links *************************************************** */}
            {/* Create components for sidebar */}
            <div className='side-bar'>
              <div className='tool-cont'>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div className='mb-1'></div>
                  <ButtonStyle2 looks='icon-logo'>
                    <Link to="/test/admin-panel">🏚️</Link>
                  </ButtonStyle2>
                  <div className='mb-1'></div>
                    <ButtonStyle2 looks='icon-logo'>
                      <Link to="/test/admin-courses">📑</Link>
                    </ButtonStyle2>
                  <div className='mb-1'></div>
                  <ButtonStyle2 looks='icon-logo'>
                    <Link to="/test/admin-materials">📚</Link>
                    </ButtonStyle2>
                    <div className='mb-1'></div>
                  <ButtonStyle2 looks='icon-logo'>
                    <Link to="/test/admin-quizzes">📎</Link>
                    </ButtonStyle2>
                </div>
              </div>

              <div className='tool-spread'>
                <Routes>
                  <Route path='test/admin-panel/*' element={
                    <>
                      <div className='side-action-main-wrapper'>
                        <div className='side-action-title-wrapper'>
                          <div className='side-action-title'>Panel</div>
                        </div>
                        <div className='side-action-menu-wrapper'>
                        <div className='lesson-dropdown-wrapper mb-2'>
                            <div className='lesson-name'>
                            <Link to="/test/admin-panel">Home</Link>
                            </div>
                          </div>
                          <div className='lesson-dropdown-wrapper mb-2'>
                            <div className='lesson-name'>
                            <Link to="/test/admin-panel/courses"> Courses</Link>
                            </div>
                          </div>
                          <div className='lesson-dropdown-wrapper mb-2'>
                            <div className='lesson-name'>
                            <Link to="/test/admin-panel/quizzes"> Quizzes</Link>
                            </div>
                          </div>
                          <div className='lesson-dropdown-wrapper mb-2'>
                            <div className='lesson-name'>
                            <Link to="/test/admin-panel/materials"> Materials</Link>
                            </div>
                          </div>
                          <div className='lesson-dropdown-wrapper mb-2'>
                            <div className='lesson-name'>
                            <Link to="/test/admin-panel/about"> About</Link>
                            </div>
                          </div>
                        </div>
                      </div>

                    </>
                  }/>

                  <Route path='test/admin-courses/*' element={
                    <>
                    <div className='side-action-main-wrapper'>
                        <div className='side-action-title-wrapper'>
                          <div className='side-action-title'>Courses</div>
                        </div>
                        <div className='side-action-menu-wrapper'>
                        <div className='lesson-dropdown-wrapper mb-2'>
                            <div className='lesson-name'>
                            <Link to="/test/admin-courses"> Home</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  }/>

                  <Route path='test/admin-materials/*' element={
                    <>
                      <div className='side-action-main-wrapper'>
                        <div className='side-action-title-wrapper'>
                          <div className='side-action-title'>Materials</div>
                        </div>
                        <div className='side-action-menu-wrapper'>
                        <div className='lesson-dropdown-wrapper mb-2'>
                            <div className='lesson-name'>
                            <Link to="/test/admin-materials">Home</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  }/> 

                  <Route path='test/admin-quizzes/*' element={
                    <>
                      <div className='side-action-main-wrapper'>
                        <div className='side-action-title-wrapper'>
                          <div className='side-action-title'>Quizzes</div>
                        </div>
                        <div className='side-action-menu-wrapper'>
                        <div className='lesson-dropdown-wrapper mb-2'>
                            <div className='lesson-name'>
                            <Link to="/test/admin-quizzes"> Home</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  }/> 
                </Routes>


              </div>
            </div>

            </div>

            {/* Content *************************************************** */}
            {/* Create components for contents */}
            <div className='content-wrapper'>
              <Routes>
                
                <Route path='/test/admin-panel' element={
                  <>
                    <h3>Home</h3>
                    <VideoForm/>
                  </>
                }/>
                <Route path='/test/admin-panel/courses' element={
                  <>
                    <h3>Courses</h3>
                    <VideoForm/>
                  </>
                }/>
                <Route path='/test/admin-panel/materials' element={
                <>
                  <h3>Materials</h3>
                  <VideoForm/>
                </>
              }/>
                <Route path='/test/admin-panel/quizzes' element={
                  <>
                    <h3>Quizzes</h3>
                    <VideoForm/>
                  </>
                }/>
                <Route path='/test/admin-panel/about' element={
                  <>
                    <h3>About</h3>
                    <VideoForm/>
                  </>
                }/>

                <Route path='/test/admin-courses' element={
                  <>
                    <h3>Courses</h3>
                    <VideoForm/>
                    </>
                  }/>

                <Route path='/test/admin-materials' element={
                  <>
                    <h3>Materials</h3>
                    <VideoForm/>
                  </>
                }/>

                <Route path='/test/admin-quizzes' element={
                  <>
                    <h3>Quizzes</h3>
                      <VideoForm/>
                    </>
                  }/>
              </Routes>
            </div>
          </div>
         </Router>
        </>
    );
}

export default Admin;

