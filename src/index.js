//import react imports
import React from 'react';
import ReactDOM from 'react-dom';

//import children App component
import App from './App';

import { BrowserRouter } from "react-router-dom";

//import react.bootstrap stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(

<BrowserRouter>
<App />
</BrowserRouter>
, document.getElementById('root'));

