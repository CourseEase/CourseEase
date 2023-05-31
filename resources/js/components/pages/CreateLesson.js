import React from 'react';
import ReactDOM from 'react-dom';

import './createlesson.css';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';

function CreateLesson(props) {
    return (
        <>
          <Header />
          <div className='main-wrapper'>
            <div className='tools-wrapper'>
              <SideBar />
            </div>
            <div className='content-wrapper'>
              
            </div>
          </div>
        </>
    );
}

export default CreateLesson;

if (document.getElementById('create-lesson')) {
    ReactDOM.render(<CreateLesson />, document.getElementById('create-lesson'));
}
