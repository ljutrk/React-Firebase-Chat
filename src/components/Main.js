import React from 'react';
import { Route } from 'react-router-dom';
import Register from './Register';
import Home from './Home';

const Main = () => {
    return ( 
        <div className="mainDiv">
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
        </div>
     );
}
 
export default Main;