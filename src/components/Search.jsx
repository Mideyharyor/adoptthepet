import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router";
import { capitalized } from "../pages/HomePage";

function Search() {
    const navigate = useNavigate();
    const [searchItem, setSearchItem] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();

        const capSearchItem = capitalized(searchItem);

        const searchQuery ={
            name : capSearchItem
        };

        const query = createSearchParams(searchQuery);
        setSearchItem("")
        navigate(`/search?${query}`);
    }
    
    return(
       <form onSubmit={handleSubmit}>
        <input type="text" className="search" value={searchItem} onChange={e => setSearchItem(e.target.value)}/>
        <button type="submit" className="search-button">🔎</button>
       </form>
    )
}

export default Search;