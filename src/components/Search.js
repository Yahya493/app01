import React, { useState } from 'react'

export default function Search(props) {
    const [searchQuery, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    }

    const handleSearch = (event) => {
        event.preventDefault();
        props.handleSearch(searchQuery)
    }

    return (
        <form onSubmit={handleSearch} className='row'>
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleInputChange}
                className='col s8'
            />
            <button className='btn-small col s4' type="submit">Search</button>
        </form>
    )
}
