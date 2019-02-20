import React from 'react'
import './Lecturer.css'
import lecturer_data from './../../data/LecturerData'
import Card from './Card'

export class Lecturer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            properties: lecturer_data.properties,
            property: lecturer_data.properties[0]
        }
    }

    nextProperty = () => {
        let newIndex;
        if (this.state.property.index === this.state.properties.length - 1) {
            newIndex = 0;
        } else {
            newIndex = this.state.property.index + 1;
        }
        this.setState({
            property: lecturer_data.properties[newIndex]
        })
    }

    prevProperty = () => {
        let newIndex;
        if (this.state.property.index === 0) {
            newIndex = this.state.properties.length - 1;
        } else {
            newIndex = this.state.property.index - 1;
        }
        this.setState({
            property: lecturer_data.properties[newIndex]
        })
    }

    render() {
        const {properties, property} = this.state;
        console.log(properties.length);
        return (
            <section id="lecturer-container">
                <div className="wrapper">
                    <div id="lecturer-text">
                        <div>
                        <label id="lecturer-title">Free Course Provider</label>
                        <p id="lecturer-desc">Improve your skill with us to devent and amazing website. Improve your skill with us to develop persistent and amazing website.</p>
                        </div>
                    </div>
                    <div id="lecturer-item">
                        <div id="slider-container">
                            <div id="slider-wrapper" style={{transform: `translateX(-${property.index*100}%)`}}>
                                {
                                    properties.map(property => <Card key={property.index} property={property}/>)
                                }
                            </div>
                        </div>
                        <div id="button-prevnext-container">
                            <button className="prev-next" onClick={() => this.prevProperty()}><i className="fa fa-chevron-left"></i></button>
                            <button className="prev-next" onClick={() => this.nextProperty()} ><i className="fa fa-chevron-right"></i></button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}