import React from 'react';
import './index.css';

// using props
function Card(props) {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} alt="myPic" className="card__img" />
                    <div className="card__info">
                        <span className="card__category">{props.spanname}</span>
                        <h3 className="card__title">{props.cardtitle}</h3>
                        <a href={props.href} target="_blank" rel="noreferrer">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;