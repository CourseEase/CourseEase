import React from 'react';
import ReactDOM from 'react-dom';

import '../../../css/buttons.css';

function ButtonStyle1(props) {
    return (
        <div className={`button ${ props.looks }`}>
          {props.children}
        </div>
    );
}

export default ButtonStyle1;

if (document.getElementById('button-style-1')) {
    ReactDOM.render(<ButtonStyle1 />, document.getElementById('button-style-1'));
}
