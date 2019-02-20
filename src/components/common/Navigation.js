import React from 'react'
import './Navigation.css'

export class Navigation extends React.Component {
    render() {
        return (
            <section id="navigation-section">
                <nav>
                    <div id="brand">
                        <label>C'OURS</label>
                    </div>
                    <div id="humberger">
                        <label htmlFor="toggle"><i className="fa fa-times"></i></label>
                        <input type="checkbox" id="toggle" />
                    </div>
                </nav>
                <ol className="nav">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Course</a></li>
                    <li><a href="/">Package</a></li>
                    <li><a href="/">Lecturer</a></li>
                    <li><a href="/">About</a></li>
                </ol>
                <div className="social-container">
                <label id="follow">Follow Us :</label>
                <ol className="social">
                    <li><a href="/"><i className="fa fa-facebook-square"></i></a></li>
                    <li><a href="/"><i className="fa fa-twitter-square"></i></a></li>
                    <li><a href="/"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="/"><i className="fa fa-youtube-play"></i></a></li>
                    <li><a href="/"><i className="fa fa-github-square"></i></a></li>
                </ol>
                </div>
            </section>
        )
    }
}