import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
        <nav >
            <div className="nav-wrapper ">
            <Link to="#" className="brand-logo left">Logo</Link>
            <ul id="nav-mobile" className="right">
                <li><Link to='opt1'>opt 1</Link></li>
                <li><Link to='opt2'>opt 2</Link></li>
                <li><Link to='opt3'>opt 3</Link></li>
            </ul>
            </div>
        </nav>
    )
  }
}
