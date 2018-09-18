import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import About from './About';
import App from './App';
import Register from './Register';
import NotFound from './NotFound';



let Routes = () =>
    <HashRouter>
        <Switch>
            <Route exact path='/About' component={About}/>
            <Route exact path='/Register' component={Register}/>
            <Route exact path='/' component={App}/>
            <Route path='/*' comonent={NotFound}/>
        </Switch>
    </HashRouter>
    

    

export default Routes;
    


