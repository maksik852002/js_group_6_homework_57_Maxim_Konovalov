import React from 'react';

const InputGroup = props => (
  <form onSubmit = {props.addElement}>
    <div className="input-group my-4">
      <input onChange={props.inputName} value={props.clearName} type="text" required className="form-control col-7 col-md-9"/>
      <select onChange={props.mark} className="custom-select col-3 col-md-2">
          <option value="Entertainment">Entertainment</option>
          <option value="Car">Car</option>
          <option value="Food">Food</option>
      </select> 
      <input onChange={props.inputPrice} type="number" required value={props.clearPrice} className="form-control col-2 col-md-1"/>
      <div className="input-group-append">
        <span className="input-group-text">KGS</span>
        <button className="btn btn-secondary" type="submit">Add</button>
      </div>
    </div>
  </form>
)

export default InputGroup;