import React, { useState, useRef } from 'react';
import { InstantSearch, SearchBox, Hits, connectStateResults } from 'algoliasearch/react';

const initAlgoliaClient = () => {
    const algoliaClient = algoliasearch(
      'JICQ4O9RUI',
      'f1e158e585d5164008a1d052e0e18fb2'
    );
    return algoliaClient.index('MoogleAPI');
  };
  

const SearchBar = ()=>
    {
        return(
            <div>
                <input>
                </input>
            </div>
        )

}

export default SearchBar;