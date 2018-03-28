import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Register from './pages/Register';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Register />, document.getElementById('root'));
registerServiceWorker();
