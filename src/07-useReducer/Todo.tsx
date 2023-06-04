import React, { FC, useReducer, useState } from 'react';

import { TodoItem } from './TodoItem';

export enum Actions {
  ADD_TODO = 'add-todo',
  TOGGLE_TODO = 'toggle-todo',
  DELETE_TODO = 'delete-todo',
}

export interface StateParams {
  id?: number;
  name: string;
  complete?: boolean;
}

export interface ReducerParams {
  type: Actions;
  payload: StateParams;
}

const reducer = (todos: StateParams[], action: ReducerParams) => {
  const { type, payload } = action;

  switch (type) {
    case Actions.ADD_TODO:
      return [...todos, newTodo(payload.name)];
    case Actions.TOGGLE_TODO:
      return todos.map(todo =>
        todo.id === payload.id ? { ...todo, complete: !todo.complete } : todo,
      );
    case Actions.DELETE_TODO:
      return todos.filter(todo => todo.id !== payload.id);
    default:
      return todos;
  }
};

const newTodo = (name: string) => ({ id: Date.now(), name, complete: false });

export const Todo: FC = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) return;
    dispatch({ type: Actions.ADD_TODO, payload: { name } });
    setName('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={name} />
      </form>
      {todos.map(todo => {
        return <TodoItem dispatch={dispatch} key={todo.id} todo={todo} />;
      })}
    </>
  );
};
