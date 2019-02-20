import React from 'react'
import './landing.css'

import {Showcase} from './Showcase'
import {Course} from './Course'
import {Service} from './Service'
import {Lecturer} from './Lecturer'

export class Landing extends React.Component {
    render() {
        return (
            <div className="App">
                <Showcase />
                <Course />
                <Lecturer />
                <Service />
            </div>
        )
    }
}