import React from 'react'
import './Card.css'

const Card = ({property}) => {
    const {index, name, profession, quote, image} = property;
    return (
        <div className="card" id={`card-${index}`}>
            <div id="card-wrapper">
                {/* <label className="lecturer-image"><i className="fa fa-user"></i></label> */}
                <div className="lecturer-image-container">
                    <img src={require(`./../../assets/images/${image}`)} alt="im"/>
                </div>
                <p className="lecturer-name">{name}</p>
                <p className="lecturer-profession">{profession}</p>
                <label className="quote-logo"><i className="fa fa-quote-right"></i></label>
                <p className="lecturer-quote">{quote}</p>
                
            </div>
        </div>
    )
}

export default Card;