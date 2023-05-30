import React from 'react';
import ReactDOM from 'react-dom';
import ButtonStyle1 from './Buttons/ButtonStyle1';
import TitleField from './TextField/TitleField';

function Home() {
    return (
      <div className="container">
            <ButtonStyle1 looks="style-1">Style 1</ButtonStyle1>
            <ButtonStyle1 looks="style-2">Style 2</ButtonStyle1>
            <TitleField></TitleField>
      </div>
    );
}

export default Home;

if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}
