import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({todos,editTodo,deleteTodo }) => {
  
  const del = (evt,id)=> {
    debugger
    evt.preventDefault();
    deleteTodo(id)
  }
  return (
    <React.Fragment>
      <h2>All Persons</h2>
      <table>
        <thead>
          <tr><td>Name</td><td>Edit</td></tr>
        </thead>
        <tbody>
        {todos.map(todo => (
          
          <tr key={todo.id}>
            <td>{todo.todoText} 
            <span style={{fontSize:"smaller"}}>
            <a href="/#" onClick= {(e)=>{e.preventDefault();deleteTodo(todo.id)}}> (delete, </a> 
            <a href="/#" onClick= {(e)=>{e.preventDefault();editTodo(todo.id)}}> edit) </a> 
            </span>
            </td>
          </tr>
          
        ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array,
  editTodo: PropTypes.func,
  deleteTodo: PropTypes.func

}
export default TodoList;
