import './App.css';
import React from 'react'
import List from './List.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { STATUS } from './status'

library.add(faCheckSquare, faPlus, faPlusCircle)

class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = { value: "", todos : [] }  
  }
  
  handleSubmit(e){
    e.preventDefault();

    // push not effect to render
    // when setState is effect to render

    let todos = this.state.todos
    todos.push(
        { id: Math.floor(Math.random() * 100) ,
          name: this.refs.note.value,
          status: STATUS.TODO })

    this.setState({ todos: todos })    
  }

  findTodoById(id){
    return this.state.todos.find(t => t.id == id)
  }
  _findIndex(id){
    return this.state.todos.findIndex(t => t.id == id)
  }
  handleCheck = id =>{
    console.log(id)
    let todos = this.state.todos
    let t = this.findTodoById(id)
    console.log(t)
    if(t.status == STATUS.COMPLETE)
        t.status = STATUS.TODO
    else
        t.status = STATUS.COMPLETE
      
    todos[this._findIndex(id)] = t
    this.setState({ todos: todos }) 
  }

  handleDelete = id=>{
    let todos = this.state.todos.filter(t => t.id != id)
    this.setState({ todos: todos }) 
  }


  render(){
     return (
      <main>
          <h2 className="header">Todo App</h2>
          <div className="main-section">
            <form onSubmit={evt => this.handleSubmit(evt)}>
                        <input className="txtTodo" type="text" placeholder="Enter your note" ref="note"/>                                       
                        <button className="btn-add"><FontAwesomeIcon icon={faPlusCircle} /></button>          
            </form>
            <List todos={this.state.todos} handleCheck={this.handleCheck} handleDelete={this.handleDelete} /> 
          </div>
      </main>
    );
  }
}

export default App;
