import React, {useState} from 'react';
import SearchResult from './SearchResult';

const Search = () => {
    const [img, setImg] = useState("");
    const inputEvent = (event) => {
        const data = event.target.value;
        setImg(data);
    }
    return(
        <>
            <div className="search_bar">
                <input type="text" placeholder="Search Anything" value={img} onChange={inputEvent}/>
                {img === "" ? null : <SearchResult searchdata={img} />}
            </div>
        </>
    );
}

export default Search;