import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import NavBar from './components/NavBar';
import NoMatch from './pages/NoMatch';
import Contact from './pages/Contact';
import React from 'react';
import './App.css'

function App() {
    return (
        <Router>
            <div className='body'>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/main" component={Main} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/contact" component={Contact} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
