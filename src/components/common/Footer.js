import React from 'react'
import './Footer.css'

export class Footer extends React.Component {
    render() {
        return (
            <footer id="footer">
                <div className="wrapper">
                    <div className="footer-content">
                        <label className="brand">C'OURS</label>
                        <p id="footer-desc">Improve your skill with us to develop persistent and amazing website.</p>
                        <ul id="social">
                            <li><a href="/"><i className="fa fa-facebook-square"></i></a></li>
                            <li><a href="/"><i className="fa fa-twitter-square"></i></a></li>
                            <li><a href="/"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="/"><i className="fa fa-youtube-play"></i></a></li>
                            <li><a href="/"><i className="fa fa-github-square"></i></a></li>
                        </ul>
                    </div>

                    {/* <div className="footer-content" id="footer-social">
                    </div> */}
                    <div className="footer-content" id="footer-menu">
                        <ul id="footer-policy">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Course</a></li>
                        <li><a href="/">Package</a></li>
                        <li><a href="/">Lecturer</a></li>
                        <li><a href="/">About</a></li>
                        </ul>
                    </div>
                    <div className="footer-content" id="footer-term">
                        <ul id="footer-policy">
                            <li><a href="/">Term of service</a></li>
                            <li><a href="/">Privacy policy</a></li>
                            <li><a href="/">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="footer-content">
                        <p className="copyright">Copyright &copy; 2019 - Turtlemedia.inc</p>
                    </div>
                </div>
            </footer>
        )
    }
}