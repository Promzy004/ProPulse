// src/pages/SearchResults.js
import { useContext } from "react";
import { SearchContext } from "../context/searchContext";

function SearchResults() {
    const { searchResults } = useContext(SearchContext);

    return (
        <div>
            {searchResults.length > 0 ? (
                <ul>
                    {searchResults.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            ) : (
                <p>No products found.</p>
            )}
        </div>
    );
}

export default SearchResults;
