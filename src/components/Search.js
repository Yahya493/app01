import React, { useState } from 'react'

export default function Search(props) {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    }

    const handleSearch = (event) => {
        event.preventDefault();
        props.handleSearch(query)
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
            <button className='btn-small col s4' type="submit">Search</button>
        </form>
    )
}
