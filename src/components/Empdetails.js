import React from 'react'
import {Link} from "react-router-dom";
import EmpdataAll from "./EmpdataAll";
import data from '../components/data.js';


const Empdetails = () => {
  return (
    <div className="container"> 

        <h3>Employee Birthday details</h3>
        <EmpdataAll employee={data} />
        <Link to="/empbirthday"> Today's Birthday</Link>
    </div>
  )
}

export default Empdetails