import React, {useState} from 'react'
import uuid from 'uuid'
import AddTodoForm from './AddTodoForm'

const Todo = ()  => {

const [todos, setTodos] = useState([
      {id: 1, todo: 'Acheter du lait' },
      {id: 2, todo: 'Coder en react' },
      {id: 3, todo: "s'entrainer avec les hooks" },
      {id: 4, todo: 'continuer ma formation' }
])

const [warning, setWarning] = useState(false)

const myTodos = todos.map (todo => {
    return (
    <li className = "list-group-item" key={todo.id}> {todo.todo} </li>)
})

const addNewTodo = (newTodo) => {
  if(newTodo !== ''){
    warning && setWarning(false)

    setTodos([...todos, {
      id: uuid(),
      todo:newTodo
    }])
    }else {
      setWarning(true)
    }
    }

    const warningMsg = warning && <div class="alert alert-danger mt-5" role="alert">
    Veuillez indiquer un todo </div>

  return (
    <div>
    {warningMsg}
    <h1 className= "text-center"> Todo List </h1>
    <h1> Nombre d'action à faire aujourd'hui : {todos.length} </h1>
    <ul className="list-group">
      {myTodos}
    </ul>
    <AddTodoForm addNewTodo={addNewTodo}/>
    </div>
  )
}
export default Todo
