import React from "react"
import Header from "../partials/Header"
import Footer from "../partials/Footer"
import { Outlet } from "react-router-dom"
class Frontend extends React.Component {
  render(){
    return (
      <>
      <div id="wrapper">
          <Header />
            <Outlet />
          <Footer />
        </div>
      </>
    )
  }
}
export default Frontend;