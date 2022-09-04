import React, {Component} from 'react'
import Validation from './Validation/Validation';
import Char from './CharComponent/Char';
import './App.css';

class App extends Component{
  state = {
    length: null,
    charComponents: []
  }

  updateLengthHandler = (e) => {
    // show the length of the text entered in the paragraph and update the state
    const strArr = e.target.value.split('');
    const length = strArr.length
    console.log(strArr);
    // update the state

    this.setState({
      length: length,
      charComponents: strArr
    });
  };

  deleteCharacterHandler = (index) => {
    // delete the Char component that was clicked and update the DOM
    // make a copy of the CharComponents in the state
    const strArr = [...this.state.charComponents];
    strArr.splice(index, 1);
    // update the state,  recall : everytime state is updated, the DOM is re-rendered 
    this.setState({
      length: strArr.length,
      charComponents: strArr
    })
  }

  render(){
    const value = this.state.charComponents.join('');
    return (
      <div className="App">
        <input type= "text" onChange={(e) => this.updateLengthHandler(e)} value = {value}></input>
        <p>{value}</p>
        <Validation length = {this.state.length}></Validation>

        {/* Dynamically list every item in the State and map them as Char components  */}
        {this.state.charComponents.map((char, index) => {

          return <Char 
                    character = {char} 
                    clicked = {() => this.deleteCharacterHandler(index)}
                  />
        })}
      </div>
    )
  }
}

export default App;