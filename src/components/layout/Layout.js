import React from "react"
import Footer from "../footer/Footer"
import Navbar from "../header/Header"
import "./styles.css"

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}
