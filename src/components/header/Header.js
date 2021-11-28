import { Link } from "gatsby"
import React from "react"
import "./styles.css"

export default function Header() {
  return (
    <header>
      <nav>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </nav>
    </header>
  )
}
