import React from 'react'
import {Link} from "react-router-dom";


const Home = () => {
  return (
    <div className="container" style={{textAlign: 'center'}}>
        <h1>Employee Birthday</h1>
        <Link to="/empdetails"> Employee Details</Link><br />
        <Link to="/empbirthday"> Today Details</Link>

    </div>
  )
}
export default Home