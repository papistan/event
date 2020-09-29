import React from "react"
import "normalize.css"
import "../styles/base.scss"
import "../styles/layout.scss"

function Layout({ children }){
  return (
    <>
      <main className="wrapper">{children}</main>
    </>
  )}

export default Layout