import React from 'react';
import ReactDOM from 'react-dom';
import SideAction from '../SideAction/SideAction';

import '../../../css/sidebar.css';
import ButtonStyle2 from '../Buttons/ButtonStyle2';

function SideBar(props) {
    return (
        <div className='side-bar'>
          <div className='tool-cont'>
            <ButtonStyle2 looks='icon-logo'>text_fields</ButtonStyle2>
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
