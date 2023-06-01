import React from 'react';
import ReactDOM from 'react-dom';
import CreateLesson from './Admin';

if (document.getElementById('test_app')){
  ReactDOM.render(
    <CreateLesson/>
  ,
  document.getElementById('test_app')
);
}


