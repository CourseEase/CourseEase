import React from 'react';
import ReactDOM from 'react-dom';
import ButtonStyle1 from './Buttons/ButtonStyle1';

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">
                            <ButtonStyle1 looks="style-1">Style 1</ButtonStyle1>
                            <ButtonStyle1 looks="style-2">Style 2</ButtonStyle1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
