import React from 'react'
import './Showcase.css'
import uiilogo from './../../assets/images/gam-1.png'

export class Showcase extends React.Component {
    render() {
        return (
            <section id="showcase-container">
                <div className="svg-container-front">
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                        <path d="M-34.99,-5.42 C266.36,129.77 235.89,-74.50 553.04,46.88 L500.00,150.00 L0.00,150.00 Z"></path>
                    </svg>
                </div>
                <div className="svg-container-back">
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                        <path d="M-34.99,-5.42 C397.85,123.84 235.89,-74.50 550.22,59.70 L500.00,150.00 L0.00,150.00 Z"></path>
                    </svg>
                </div>
                <div className="wrapper">
                    <div id="showcase-info-container">
                        <label id="showcase-title">Free Course Provider</label>
                        <p id="showcase-desc">Improve your skill with us to develop persistent and amazing skill with us to develop persistent and skill with us to develop persistent and website.</p>
                        <button id="showcase-button">Register now</button>
                        <p id="looking-label"><a href="/">Looking for lecturer?</a></p>
                    </div>
                    <div id="showcase-image-container">
                        <img alt="showcase" src={uiilogo} />
                    </div>
                </div>
            </section>
        )
    }
}