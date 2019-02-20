import React from 'react'
import './landing.css'

import {Showcase} from './Showcase'
import {Course} from './Course'
import {Service} from './Service'
import {Lecturer} from './Lecturer'
import {Feature} from './Feature'

export class Landing extends React.Component {
    render() {
        return (
            <div className="App">
                <Showcase />
                <Feature />
                <Course />
                <Lecturer />
                <Service />
            </div>
        )
    }
}