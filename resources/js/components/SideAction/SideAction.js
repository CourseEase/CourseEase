import React from 'react';
import ReactDOM from 'react-dom';

import './sideaction.css';

function SideAction(props) {
    return (
        <div className='side-action-main-wrapper'>
          <div className='side-action-title-wrapper'>
            <div className='side-action-title'>{props.title}</div>
          </div>
          <div>

          </div>
        </div>
    );
}

export default SideAction;

if (document.getElementById('side-action')) {
    ReactDOM.render(<SideAction />, document.getElementById('side-action'));
}
