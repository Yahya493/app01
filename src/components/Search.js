import React, { useState } from 'react'

export default function Search() {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    }

    const handleSearch = (event) => {
        event.preventDefault();
        // handle search query
    }

    return (
        <form onSubmit={handleSearch} className='row'>
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleInputChange}
                className='col s8'
            />
            <button className='btn-small col s4' type="submit"><i className='material-icons'>search</i></button>
        </form>
    )
}
