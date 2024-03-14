import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from './TodoList';
import FilterButtons from './FilterButtons';
import { addTodo, updateSearchTerm } from '../redux/actions';

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== '') {
      handleAddTodo(newTodoText.trim());
      setNewTodoText('');
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 bg-opacity-35 rounded">
      <h2 className='mt-3 mb-6 text-2xl font-bold text-center uppercase'> TODO APP</h2>
      <div className="flex items-center mb-4 ">
        <input
          id="addTodoInput"
          className="flex-grow rounded-l-lg p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Add Todo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button
          className="ml-0 py-[9px] px-12 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none"
          onClick={handleAddTodoClick}
        >
          Add
        </button>
      </div>
      <div>
      <div className="flex items-center mb-4">
          <input
            className="flex-grow rounded-l-lg  p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Search Todos"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <button className="rounded-r-lg py-[9px] px-10 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none">
          Search
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <FilterButtons />
      </div>

      <TodoList />
    </div>
  );
};

export default Todo;
