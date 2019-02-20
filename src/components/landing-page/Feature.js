import React from 'react'
import { Link } from 'react-router-dom'
import './Feature.css'

export class Feature extends React.Component {
    render() {
        return (
            <section id="feature-container">
                <div className="wrapper">
                    <ul id="feature-content">
                        <li>
                            <label className="feature-item-icon"><i className="fa fa-list" /></label>
                            <p className="feature-item-title">Lorem Ipsum Dolor</p>
                            <p className="feature-item-desc">Improve your skill with us to develop skill with us to developpersistent and amazing website</p>
                            <Link to="/" className="learn-more-link">Learn more</Link>
                        </li>
                        <li>
                            <label className="feature-item-icon"><i className="fa fa-bar-chart" /></label>
                            <p className="feature-item-title">Lorem Ipsum Dolor</p>
                            <p className="feature-item-desc">Improve your skill with us to develop skill with us to developpersistent and amazing website</p>
                            <Link to="/" className="learn-more-link">Learn more</Link>
                        </li>
                        <li>
                            <label className="feature-item-icon"><i className="fa fa-archive" /></label>
                            <p className="feature-item-title">Lorem Ipsum Dolor</p>
                            <p className="feature-item-desc">Improve your skill with us to develop skill with us to developpersistent and amazing website</p>
                            <Link to="/" className="learn-more-link">Learn more</Link>
                        </li>
                        <li>
                            <label className="feature-item-icon"><i className="fa fa-file-text" /></label>
                            <p className="feature-item-title">Lorem Ipsum Dolor</p>
                            <p className="feature-item-desc">Improve your skill with us to develop skill with us to developpersistent and amazing website</p>
                            <Link to="/" className="learn-more-link">Learn more</Link>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}