import React from 'react';
import './FinanceElement.css'

const FinanceElement = props => (
  <div className="d-flex p-2 mb-2 elementBody">
    <div className="col-6 col-md-9">
      <span className={`elementName ${props.class}`}>{props.name}</span>
    </div>
    <div className="col-4 col-md-2 text-center">
      <span>{props.price} KGS</span>
    </div>
    <div className="col-1 d-flex justify-content-center">
      <button onClick={props.remove} className="close">x</button>
    </div>
  </div>
)

export default FinanceElement;