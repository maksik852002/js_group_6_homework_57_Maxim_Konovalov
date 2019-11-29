import React from 'react';
import './Diagram.css'

const Diagram = props => (
  <div className="d-flex flex-column ">
    <div style={{"height":"40px", "background":'#d2c8c83d'}} className="d-flex rounded mt-2">
      <div style={{"width":`${props.enter}%`, "height":"38px", "background":'orange', "transition": "all 0.5s"}} className="element">{props.entTotal} </div>
      <div style={{"width":`${props.car}%`, "height":"38px", "background":'blue', "transition": "all 0.5s"}} className="element">{props.carTotal}</div>
      <div style={{"width":`${props.food}%`, "height":"38px", "background":'green', "transition": "all 0.5s"}} className="element">{props.foodTotal}</div>
    </div>
    <div className='d-flex justify-content-around pt-2'>
      <p className="enter legend">Entertainment</p>
      <p className="car legend">Car</p>
      <p className="food legend">Food</p>
    </div>
  </div>
)

export default Diagram;