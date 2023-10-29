import React from 'react'

const Todo = ({todo}) => {
  return (
    <div>
      <h4>{Todo.title}</h4>
      <p>{Todo.desc}</p>
      <button className="btn btn-sm btn-danger">Delete</button>
    </div>
  )
}

export default Todo
