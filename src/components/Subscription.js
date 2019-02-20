import React from 'react'
import './Subscription.css'

export class Subscription extends React.Component {
    render() {
        return (
            <section id="subscription">
                <div className="wrapper">
                    <label id="subscription-title">Free Course Provider</label>
                    <p id="subscription-desc">Improve your skill with us to develop persistent and amazing website.</p>
                    <input id="subscription-mail" type="text" />
                    <button id="subscription-button">Subscribe</button>
                </div>
            </section>
        )
    }
}