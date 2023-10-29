import React from 'react'
import Todo from './Todo'

export const Todos = (props) => {
    return (
      <div className='container'>
          <h4 className='text-center'>Todos List</h4>
          {props.todos.map((todo)=>{
            return <Todo todo={todo}/>
          })}
                  
      </div>
  )
}

export default Todos
