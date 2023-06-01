import React from 'react';
import ReactDOM from 'react-dom';

import '../../../css/buttons.css';

function ButtonStyle3(props) {
    return (
        <div className={`${ props.looks }`}>
          <div className='button-logo'>+</div>
          <p>{props.children}</p>
        </div>
    );
}

export default ButtonStyle3;

if (document.getElementById('button-style-3')) {
    ReactDOM.render(<ButtonStyle3 />, document.getElementById('button-style-3'));
}
