import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className="pa2">
            <input className="pa3 ba b--black bg-lightest-blue shadow-5" type='search' placeholder='Search Robots' onChange={searchChange}/>
        </div>
        
    );
}

export default SearchBox;