import React from 'react';
import ReactDOM from 'react-dom';

import './videoform.css';

function VideoForm(props) {
    return (
      <div className='form-wrapper form-row'>
        <div class="col-md-6">
          <label>Lesson Title</label>
          <input type='text' className='form-control' />
        </div>

        <label>Description</label>
        <textarea type='text' className='form-control' />

        <label>Upload</label>
        <div className='video-upload-wrapper'>

        </div>
      </div>
    );
}

export default VideoForm;

if (document.getElementById('video-form')) {
    ReactDOM.render(<VideoForm />, document.getElementById('video-form'));
}
