import React from 'react';

const SearchResult = (props) => {
    const imagesrc = `https://source.unsplash.com/600x400/?${props.searchdata}`;
    return(
        <>
            <div>
                <img src = {imagesrc} alt="" />
            </div>
        </>
    );
}

export default SearchResult;