import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import About from './About';
import App from './App';
import Register from './Register';



let Routes = () =>
    <HashRouter>
        <Switch>
            <Route path='/About' component={About}/>
            <Route path='/Register' component={Register}/>
            <Route exact path='/' component={App}/>
        </Switch>
    </HashRouter>
    

    

export default Routes;
    


