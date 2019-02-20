import React from 'react'
import './Service.css'
import ServiceImage from './../../assets/images/service-image.png'

export class Service extends React.Component {
    render(){
        return (
            <section id="service-container">
                <div className="wrapper">
                    <div id="service-text-container">
                        <label id="service-title">Free Course Provider</label>
                        <p id="service-desc">Improve your develop persistent and amazing website.</p>
                        <ul id="service-list">
                            <li>
                                <label className="service-item-logo"><i className="fa fa-rss-square"></i></label>
                                <div className="services-item-container">
                                    <label className="service-item-title">Speed</label>
                                    <p className="service-item-desc">
                                    Improve your develop persistent and amazing website.Improve your skill with us to develop persistent and amazing website.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <label className="service-item-logo"><i className="fa fa-check-square"></i></label>
                                <div className="services-item-container">
                                    <label className="service-item-title">Quality</label>
                                    <p className="service-item-desc">
                                        Improve your persistent and amazing website.Improve your skill with us to develop persistent and amazing website.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <label className="service-item-logo"><i className="fa fa-buysellads"></i></label>
                                <div className="services-item-container">
                                    <label className="service-item-title">Assurance</label>
                                    <p className="service-item-desc">
                                        Improve develop persistent and amazing website.Improve your skill with us to develop persistent and amazing website.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div id="service-image-container">
                        <img id="service-image" alt="service" src={ServiceImage} />
                    </div>
                </div>
            </section>
        )
    }
}