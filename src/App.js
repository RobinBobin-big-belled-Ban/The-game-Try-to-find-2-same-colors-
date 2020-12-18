import './App.css';
import React from 'react'
import Tr from './components/tr'


class App extends React.Component {
  constructor() {
      super()
      this.state = {
        elements: [],
      }
      this.onClickHandler = this.onClickHandler.bind(this)
      this.choose = this.choose.bind(this)
      this.getChoosenElementsArray = this.getChoosenElementsArray.bind(this)
  } 

  getChoosenElementsArray() {
      let choosenElements = this.state.elements.filter(item => {
        if (item.hasAttribute('class'))  {
          return item
        }
      }) 
      return choosenElements
  }

  choose(array) {
      if (array[0].className !== array[1].className) {
          array[0].removeAttribute('class')
          array[1].removeAttribute('class')
        } 
        else if (array[0].className === array[1].className) {
          for (let c of array) {
            c.style.opacity = '0'
            c.removeAttribute('class')
          }
      }
  }

  onClickHandler(event, item) {
      event.target.className = item;
      //console.log(this.state.elements)
      let elem = Array.from(document.querySelectorAll('p'));
      this.setState({
        elements: elem,
      })
      let choosenElementsArray = this.getChoosenElementsArray()
      //console.log(ChoosenElementsArray)

      if (choosenElementsArray.length >= 2) {
         setTimeout(() => this.choose(choosenElementsArray), 1000)
      }
  }

  render() {
      return(  
        <div id='div'>
          <h1>Hello</h1>
          <Tr onClickHandler={ this.onClickHandler} />
        </div>
      )
  }
}

export default App;
