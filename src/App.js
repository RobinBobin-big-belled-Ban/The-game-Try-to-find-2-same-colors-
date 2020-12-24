import './App.css';
import React from 'react'
import colors from './files/file'
import Tr from './components/tr'


class App extends React.Component {
  constructor() {
      super()
      this.state = {
        elements: colors,
        date: [],
        prevStates: colors, 
      }
      this.onClickHandler = this.onClickHandler.bind(this)
  } 

  onClickHandler(event) {
      const {id} = event.target
      const {elements, date, prevStates} = this.state
      
      //Изменяю состоние для того, чтобы при нажатии на клетку игр. поля
      //клетка окрашивалась в цвет.
      const newStateArray = elements.map(item => {
        return (id === item.id) ? {...item, clsName: item.color, clicking: false} : item
      })

      this.setState({elements: newStateArray,})
  
      //Создается объект для добавления в массив выбранных объектов.
      //С их помозью будет изменено состояние окрашенных элементов
      const choosenElements = newStateArray.filter((elem) => {
          if (elem.id === id) return elem 
      })

      const filteredArray = [...date,  ...choosenElements]
      this.setState({date: filteredArray})
      
      //Сохраняю резервную копию состояния, которое было до первого нажатия на квадрат в игровом поле
      if (filteredArray.length === 1) {
        this.setState({prevStates: elements,})
      }
  
      //choosenElements был создан для замены объектов в состоянии.
      //а также для формирования массива выбранных объектов
      if (filteredArray.length === 2) {
        if (filteredArray[0].clsName === filteredArray[1].clsName) {
          let newElem = filteredArray.map(item => {
             return {...item, clsName: "delete"}
          })
          let array = newStateArray.map(item => {
            return (item.id === newElem[0].id) ? newElem[0] : 
              (item.id === newElem[1].id) ? newElem[1] : item 
          })
          setTimeout(() => this.setState({elements: array, date: [],}), 200)
        }else{
          setTimeout(() => this.setState({elements: prevStates, date: [],}), 200)
        }
      }
  }

  render() {
    //console.log(this.state.elements)
      return(  
        <div id='div'>
          <h1>Hello</h1>
          <Tr 
            onClickHandler={this.onClickHandler} 
            colors={this.state.elements}S
          />
        </div>
      )
  }
}

export default App;
