import React from 'react';
import './card.css';  // Ensure this is the correct path for your CSS

const Card = ({ title, description, date, moreInfo, link }) => {
    return (
        <div className="card">
            <div className="card-content">
                <h2>{title}</h2>
                <p>{description}</p>
                <p><strong>Date:</strong> {date}</p>
                <p>{moreInfo}</p>
                {/* Learn More button */}
                <a href={link} target="_blank" rel="noopener noreferrer" className="card-button">Learn More</a>
            </div>
        </div>
    );
}

export default Card;
