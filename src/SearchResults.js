import React from 'react';
import './App.css';

function SearchResults({ results }) {
    return (
        <div className="SearchResults mt-4">
            <ul>
                {results.map((r,i) =>
                    <li key={i}>
                        <img alt={r.alt_description} src={r.urls.regular} />
                    </li>
                )}
            </ul>
        </div>
    );
}

export default SearchResults;