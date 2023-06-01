import React from 'react';
import ReactDOM from 'react-dom';

import './sideaction.css';
import LessonDropdown from '../LessonDropdown/LessonDropdown';

function SideAction(props) {
    return (
        <div className='side-action-main-wrapper'>
          <div className='side-action-title-wrapper'>
            <div className='side-action-title'>{props.title}</div>
          </div>
          <div className='side-action-menu-wrapper'>
            <LessonDropdown />
          </div>
        </div>
    );
}

export default SideAction;

if (document.getElementById('side-action')) {
    ReactDOM.render(<SideAction />, document.getElementById('side-action'));
}
