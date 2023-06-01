import React from 'react';
import ReactDOM from 'react-dom';

import './lessondropdown.css';
import LessonType from './LessonType';
import ButtonStyle3 from '../Buttons/ButtonStyle3';

function LessonDropdown(props) {
    return (
      <div>
        <div className='lesson-dropdown-wrapper'>
          <div className='lesson-name'>Lesson 1</div>
        </div>
        <LessonType/>
        <ButtonStyle3 looks="style-3">Add lesson</ButtonStyle3>
      </div>
    );
}

export default LessonDropdown;

