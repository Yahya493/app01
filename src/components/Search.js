import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Search({ handleSearch }) {
    const [searchQuery, setQuery] = useState('');
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    handleSearch = (event) => {
        event.preventDefault()
        navigate('/')
        dispatch({type: 'search', searchQuery: searchQuery})
    }

    const handleInputChange = (event) => {
        setQuery(event.target.value);
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
