import React from 'react';
import ReactDOM from 'react-dom';

import '../../../css/buttons.css';

function ButtonStyle1(props) {
    return (
        <button type='button' className={`btn button ${ props.looks }`}>
          {props.children}
        </button>
    );
}

export default ButtonStyle1;

if (document.getElementById('button-style-1')) {
    ReactDOM.render(<ButtonStyle1 />, document.getElementById('button-style-1'));
}
