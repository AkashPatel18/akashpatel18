import React from "react"
import Footer from "../footer/Footer"
import Navbar from "../header/Header"
import "../../styles/global.css"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}
