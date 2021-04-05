import React from 'react';
import './index.css';

function ImageGallery() {
    const img1 = "https://picsum.photos/300/200";
    const img2 = "https://picsum.photos/350/200";
    const img3 = "https://picsum.photos/340/200";
    const img4 = "https://picsum.photos/320/200";
    const links = "https://picsum.photos/";
    return (
        <>
            <h1 className="heading" contentEditable="true">Random Image Gallery</h1>
            <div className="img_div">
                <img src={img1} alt="random" />
                <img src={img2} alt="random" />
                <img src={img3} alt="random" />
                <a href={links} target="_blank" rel="noreferrer">
                    <img src={img4} alt="random" />
                </a>
            </div>
        </>
    );

}

export default ImageGallery;