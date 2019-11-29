import React, {Component} from 'react';

import nanoid from 'nanoid'
import InputGroup from './component/InputGroup/InputGroup'
import MainField from './component/MainField/MainField'
import FinanceElement from './component/FinanceElement/FinanceElement'
import TotalSpent from './component/TotalSpent/TotalSpent'
import Diagram from './component/Diagram/Diagram'

import './bootstrap.min.css'

class App extends Component {

  state = {
    financeElement:[],
    total:0,
    inputName:'',
    inputPrice:'',
    mark:'',
    percentage:{},
    sum:{},
  };    

  addNameValue = (e) =>{
    let inputName = this.inputName;
    inputName = e.target.value;
    this.setState({inputName});
  };

  addPriceValue = (e) => {
    let inputPrice = this.inputPrice;
    inputPrice = parseInt(e.target.value);
    this.setState({inputPrice});
  };

  addMark = (e) => {
    let mark = this.mark;
    mark = e.target.value;
    this.setState({mark});
  };

  addElement = (e) => {
    e.preventDefault()
    let financeElement = [...this.state.financeElement];
    let mark = this.state.mark;
    let sum = {...this.state.sum};
    const percentage = {...this.state.percentage};
    mark===''&&(mark='Entertainment');
    financeElement.push({name: this.state.inputName, price: this.state.inputPrice, id: nanoid(), mark});
    const total = financeElement.reduce((acc, el) => acc+el.price,0);
    sum = financeElement.reduce((acc, el) => {acc[el.mark]=(acc[el.mark] || 0)+el.price; return acc}, {});
    sum['Entertainment']===undefined? percentage['Entertainment'] = 0 : percentage['Entertainment'] = sum['Entertainment']*100/total;
    sum['Car']===undefined? percentage['Car'] = 0: percentage['Car'] = sum['Car']*100/total;
    sum['Food']===undefined? percentage['Food'] = 0: percentage['Food'] = sum['Food']*100/total;
    this.setState({financeElement, inputName:'', inputPrice:'', total,percentage, sum});
  };

  removeElement = (id) => {
    const financeElement = [...this.state.financeElement];
    const i = financeElement.findIndex(fe => fe.id === id);
    const percentage = {...this.state.percentage};
    let sum = {...this.state.sum};
    financeElement.splice(i, 1);
    const total = financeElement.reduce((acc, el) => acc+el.price,0);
    sum = financeElement.reduce((acc, el) => {acc[el.mark]=(acc[el.mark] || 0)+el.price; return acc}, {});
    sum['Entertainment']===undefined? percentage['Entertainment'] = 0 : percentage['Entertainment'] = sum['Entertainment']*100/total;
    sum['Car']===undefined? percentage['Car'] = 0: percentage['Car'] = sum['Car']*100/total;
    sum['Food']===undefined? percentage['Food'] = 0: percentage['Food'] = sum['Food']*100/total;
    this.setState({financeElement,total,percentage,sum});
  };

  render = () => (
    <div className="container">
      <InputGroup
        inputName = {(e) => this.addNameValue(e)} 
        mark = {(e) => this.addMark(e)}
        inputPrice = {(e) => this.addPriceValue(e)}
        addElement = {(e) => this.addElement(e)}
        clearName = {this.state.inputName}
        clearPrice = {this.state.inputPrice}
      />
      <MainField>
        {this.state.financeElement.map((el, i) => (
          <FinanceElement
            key={i}
            name={el.name}
            price={el.price}
            remove = {() => this.removeElement(el.id)}
            class ={el.mark} 
          />
        ))}
      </MainField>
      <TotalSpent
          total = {this.state.total}
        />
      <Diagram
        enter= {this.state.percentage.Entertainment}
        car= {this.state.percentage.Car}
        food= {this.state.percentage.Food}
        entTotal = {this.state.sum.Entertainment}
        carTotal = {this.state.sum.Car}
        foodTotal = {this.state.sum.Food}
      />
    </div>
  )
};

export default App;