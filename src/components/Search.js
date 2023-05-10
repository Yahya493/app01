import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

export default function Search({ handleSearch }) {
    const [searchQuery, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    }

    const dispatch = useDispatch()

    handleSearch = (event) => {
        event.preventDefault()
        dispatch({type: 'search', searchQuery: searchQuery})
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
