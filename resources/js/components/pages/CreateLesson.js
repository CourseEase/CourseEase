import React from 'react';
import ReactDOM from 'react-dom';

import './createlesson.css';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import VideoForm from '../VideoForm/VideoForm';

function CreateLesson(props) {
    return (
        <>
          <Header />
          <div className='main-wrapper'>
            <div className='tools-wrapper'>
              <SideBar />
            </div>
            <div className='content-wrapper'>
              <VideoForm />
            </div>
          </div>
        </>
    );
}

export default CreateLesson;

if (document.getElementById('create-lesson')) {
    ReactDOM.render(<CreateLesson />, document.getElementById('create-lesson'));
}
