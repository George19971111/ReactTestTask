import React from 'react';
import './app.scss';
import {Switch, Route} from 'react-router-dom';
import Home from '../pages/HomePage';
const App = ()=>{
    return(
        <React.Fragment>
           <Switch>
               <Route path='/' component={Home}/>
           </Switch>
        </React.Fragment>
    )
}
export default App;