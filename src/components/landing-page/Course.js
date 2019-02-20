import React from 'react'
import './Course.css'

export class Course extends React.Component {
    render() {
        return (
            <section id="course">
                <div className="wrapper">
                    <div id="course-text">
                        <label id="course-title">Provided Courses</label>
                        <p id="course-desc">Improve your skill with us to develop skill with us to developpersistent and amazing website. Improve your skill with us to develop persistent and amazing website.</p>
                        <button id="course-button">Get Access</button>
                    </div>
                    <div id="course-list-container">
                        <ul id="course-list">
                            <li>
                                <label className="course-list-icon"><i className="fa fa-clipboard"></i></label>
                                <label className="course-list-title">UX/UI Design</label>
                            </li>
                            <li>
                                <label className="course-list-icon"><i className="fa fa-desktop"></i></label>
                                <label className="course-list-title">Web Development</label>
                            </li>
                            <li>
                                <label className="course-list-icon"><i className="fa fa-mobile"></i></label>
                                <label className="course-list-title">Mobile Development</label>
                            </li>
                            <li>
                                <label className="course-list-icon"><i className="fa fa-clock-o"></i></label>
                                <label className="course-list-title">Performance</label>
                            </li>
                            <li>
                                <label className="course-list-icon"><i className="fa fa-cloud"></i></label>
                                <label className="course-list-title">Deployment</label>
                            </li>
                            <li>
                                <label className="course-list-icon"><i className="fa fa-check-square-o"></i></label>
                                <label className="course-list-title">Maintenance</label>
                            </li>
                        </ul>
                        <label id="more-course-arrow">More courses &#8594;</label>
                    </div>
                </div>
            </section>
        )
    }
}