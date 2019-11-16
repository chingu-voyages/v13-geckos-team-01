
import React from 'react'
import { Route, Link } from "react-router-dom";

import ComponentIndex from './Components/Component-Index'
import Sample from './Components/SampleWebsite/Sample'
  

function App() {
    return (
        <div>
            <Route exact path='/' component={ComponentIndex}/>
            <Route exact path='/sample' component={Sample}/>

        </div>
    )
}

export default App
