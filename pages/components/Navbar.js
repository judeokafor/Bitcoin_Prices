import React, { Component } from 'react'
import Link from 'next/link';
export class Navbar extends Component {
  render() {
    return (
      <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary mb-4">
                <div className = "container">
                    <a className="navbar-brand" href="#">BitzPrice</a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link href = "/">
                                        <a className="nav-link">Home</a>
                                    </Link>
                                </li> 
                                <li className="nav-item">
                                    <Link href = "/about">
                                        <a className="nav-link">About Us</a>
                                    </Link>
                                </li> 
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
    )
  }
}

export default Navbar
