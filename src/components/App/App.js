import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../elements/Header/Header';
import Home from '../Home/Home';

const App = () => {
    return (
        // <div>
        //     <Header />
        //     <Home />
        // </div>

        <Router>
            <Fragment>
                <Header />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/:movieId" />
                </Switch>
            </Fragment>
        </Router>
    )
}

export default App;