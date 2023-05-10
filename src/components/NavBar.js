import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

export default class NavBar extends Component {

  render() {
    return (
      <nav>
        <div className="nav-wrapper row">
          <Link to="/" className="brand-logo left hide-on-small-and-down" style={{ paddingLeft: '10px' }}>FakeStore</Link>
          <ul id="nav-mobile" className="right">
            <li><Link to='/'>Home</Link></li>
            <li>
              <div className='right' style={{padding:'10px'}}> 
                <Search />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
