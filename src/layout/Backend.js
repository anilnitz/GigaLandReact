import React from "react"
import { Outlet } from "react-router-dom"
class Backend extends React.Component {
  render(){
    return (
      <>
        <div>admin header</div>
        <Outlet />
        <div>admin footer</div>
      </>
    )
  }
}
export default Backend;