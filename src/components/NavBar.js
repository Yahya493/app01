import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
        <nav>
            <div className="nav-wrapper ">
            <Link to="#" className="brand-logo left" style={{paddingLeft:'10px'}}>Logo</Link>
            <ul id="nav-mobile" className="right">
                <li><Link to='/'>Home</Link></li>
            </ul>
            </div>
        </nav>
    )
  }
}
