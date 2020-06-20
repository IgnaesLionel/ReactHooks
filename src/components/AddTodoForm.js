import React, {useState} from 'react'

const AddTodoForm = ({addNewTodo}) => {

  const [ addTodo, setAddTodo ] = useState('')

  const handleTodo = (e) => {
    e.preventDefault()
    addNewTodo(addTodo)
  }

  return (
    <form className="mt-4" onSubmit={handleTodo}>
      <div className="card card-body">
        <div className="form-group">
          <label> Ajouter Todo </label>
          <input type="text" className="form-control" placeholder="Entrez votre To Do" value={addTodo} onChange={(e)=> setAddTodo(e.target.value)}/>
          <input type="submit" className="btn btn-success mt-4" />
        </div>
      </div>
    </form>
  )
}
// value={inputdata.inputvalue}

export default AddTodoForm
