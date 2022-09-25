import React from "react";
import ratingstar from "../images/rating-star.jpeg";

export default function Card(props) {
    return (
        <div className="card">
            <img src={`assets/images/${props.coverImg}`} alt="card-image" className="card-image" />
            <div className="card-stats">
                <img src={ratingstar} alt="photo grid" className="ratingstar" height="20px" width="20px"/>
                <span className="gray">{props.stats.rating}</span>
            </div>
            <h3 className="card-title">{props.title}</h3>
            <p className="card-price">{props.price} night</p>
        </div>
    )
}