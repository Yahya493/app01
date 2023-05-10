import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Search from './Search'

export default class NavBar extends Component {

  // handleSearch = (query) => {
  //   this.props.handleSearch(query)
  // }

  render() {
    return (
      <nav>
        <div className="nav-wrapper row">
          <Link to="#" className="brand-logo left hide-on-small-and-down" style={{ paddingLeft: '10px' }}>FakeStore</Link>
          <ul id="nav-mobile" className="right">
            <li><Link to='/'>Home</Link></li>
            <li>
              <div className='right' style={{padding:'10px'}}> 
                <Search /*handleSearch={this.handleSearch}*//>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
