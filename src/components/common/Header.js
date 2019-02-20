import React from 'react'
import './Header.css'
import {Navigation} from './Navigation'
import { Link } from 'react-router-dom'

export class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            scrolled: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 70;
            if (isTop !== true) {
                this.setState({scrolled: true})
            } else {
                this.setState({scrolled: false})
            }
        })
    }

    componentWillMount() {
        window.removeEventListener('scroll', {});
    }
    render() {
        return (
            <header className={this.state.scrolled ? 'header header-fix' : 'header'}>
                <nav>
                    <div id="brand">
                        <label className={this.state.scrolled ? 'brand-label label-fix' : 'brand-label'}>C'OURS</label>
                    </div>
                    <div id="nav-menu-container">
                        <ul className="menu">
                            <li className="active"><a href="/">Home</a></li>
                            <li><a href="/">Course</a></li>
                            <li><a href="/">Package</a></li>
                            <li><a href="/">Lecturer</a></li>
                            <li><a href="/">About</a></li>
                        </ul>
                        <div id="login-label"><Link to="login">Login</Link></div>
                        <div id="join-button">
                            <button>Join us</button>
                        </div>
                        <div id="humberger">
                            <label htmlFor="toggle"><i className="fa fa-bars" /></label>
                            <input type="checkbox" id="toggle" />
                            <Navigation />
                        </div>
                    </div>
                </nav>
            </header> 
        )
    }
}