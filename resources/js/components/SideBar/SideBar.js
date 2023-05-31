import React from 'react';
import ReactDOM from 'react-dom';
import SideAction from '../SideAction/SideAction';

import '../../../css/sidebar.css';

function SideBar(props) {
    return (
        <div className='side-bar'>
          <div className='tool-cont'>

          </div>
          <div className='tool-spread'>
            <SideAction title="Tool Title" />
          </div>
        </div>
    );
}

export default SideBar;

if (document.getElementById('side-bar')) {
    ReactDOM.render(<SideBar />, document.getElementById('side-bar'));
}
