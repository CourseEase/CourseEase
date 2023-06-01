import React from 'react';
import ReactDOM from 'react-dom';

import '../../../css/buttons.css';

function ButtonStyle2(props) {
    return (
        <button type='button' className={`btn ${ props.looks }`}>
          <span class="material-symbols-outlined">
            {props.children}
          </span>
        </button>
    );
}

export default ButtonStyle2

if (document.getElementById('button-style-2')) {
    ReactDOM.render(<ButtonStyle2 />, document.getElementById('button-style-2'));
}
