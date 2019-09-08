import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../component/home';
import Me from '../component/me';
import Posts from '../component/posts';
import Writen from '../component/writen';
import Topics from '../component/topics';
import './index.less';

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <div className='nav_bar'>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/me'>Me</Link>
                        </li>
                        <li>
                            <Link to='/topics'>Topics</Link>
                        </li>
                        <li>
                            <Link to='/posts'>Posts</Link>
                        </li>
                        <li>
                            <Link to='/writen'>Writen</Link>
                        </li>
                    </ul>
                </div>
                <div className='content'>
                    <Route exact path='/' component={Topics} />
                    <Route path='/me' component={Me} />
                    <Route path='/topics' component={Topics} />
                    <Route path='/posts' component={Posts} />
                    <Route path='/writen' component={Writen} />
                </div>
            </Router>
        );
    }
}

export default AppRouter;
