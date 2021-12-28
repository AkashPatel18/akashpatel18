import { Link } from "gatsby"
import React from "react"
import "./styles.css"

export default function Header() {
  return (
    <header>
      <nav className="nav">
        {/* <div>
          <Link to="/">AKASH PATEL</Link>
        </div> */}
        <div className="links">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/about">
            About
          </Link>
          <Link className="link" to="/projects">
            Projects
          </Link>
        </div>
      </nav>
    </header>
  )
}
