import React from 'react';
import ReactDOM from 'react-dom';

import '../../../css/textfield.css';

function TitleField() {
    return (
       <input className='form-control title-field ' type='text' placeholder='Project Title' />
    );
}

export default TitleField;

if (document.getElementById('title-field')) {
    ReactDOM.render(<TitleField />, document.getElementById('title-field'));
}
