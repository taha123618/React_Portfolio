import React from 'react';
import "./About.css";

const Skills = () => {
    return (
        <>
<h1 className="text-center skills"> Skills's</h1> <br />
<div className="container m-md-3 ">
<h3 className=" progress-title">HTML5 - CSS3 </h3>
<div className=" progress">
  <div className=" progress-bar" role="progressbar" style={{width: "90%" , background : "#59b256"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"> </div>
</div><br />
<h3 className=" progress-title">JavaScript</h3>
<div className=" progress">
  <div className= "progress-bar bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"> </div>
</div><br />
<h3 className=" progress-title">React</h3>
<div className=" progress">
  <div className="progress-bar bg-info" role="progressbar" style={{width: "60%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">  </div>
</div><br />
<h3 className=" progress-title">MERN</h3>
<div className=" progress">
  <div className="progress-bar " role="progressbar" style={{width: "40%" , background : "#ed6b40"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">  </div>
</div><br />
</div>

     </>
    )
}

export default Skills;
