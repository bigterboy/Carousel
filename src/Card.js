import React, { Component } from 'react';
import PropTypes from 'prop-types';
import img123 from './assets/car-1.jpg';


const Card = ({property}) => {
    const {index, picture, city, address, bedrooms, bathrooms, carSpaces} = property;
    console.log(picture);
    return (
        <div id={`card-${index}`} className="card">
            <img src={picture} alt={city} />

            {/* <img src={require(picture)} alt={city} /> */}
            {/* <div className="details">
                <span className="index">{index+1}</span>
                <p className="location">
                    {city}<br />
                    {address}
                </p>
                <ul className="features">
                    <li className="icon-bed">{bedrooms} <span>bedrooms</span></li>
                    <li className="icon-bath">{bathrooms} <span>bathrooms</span></li>
                    <li className="icon-car">{carSpaces} <span>parking spots</span></li>
                </ul>
            </div> */}


        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;