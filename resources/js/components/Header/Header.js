import React from 'react';
import ReactDOM from 'react-dom';
import ButtonStyle1 from '../Buttons/ButtonStyle1';

import '../../../css/header.css';
import TitleField from '../TextField/TitleField';

function Header(props) {
    return (
        <div className="header d-flex justify-content-between">
          <div className='exit-cont'>
            
          </div>
          <div className='d-flex align-items-center'>
            <TitleField />
          </div>
          <div className='d-flex align-items-center' style={{marginRight: '30px'}}>
            <div style={{marginRight: '5px'}}>
              <ButtonStyle1 looks="style-2">Preview</ButtonStyle1>
            </div>
            <div>
              <ButtonStyle1 looks="style-1">Save</ButtonStyle1>
            </div>
          </div>
          
          
        </div>
    );
}

export default Header;

if (document.getElementById('header')) {
    ReactDOM.render(<Header />, document.getElementById('header'));
}
