import React, { FC } from 'react';

import { Actions, ReducerParams, StateParams } from './Todo';

interface TodoItemProps {
  todo: StateParams;
  dispatch: React.Dispatch<ReducerParams>;
}

export const TodoItem: FC<TodoItemProps> = ({ todo, dispatch }) => {
  const handleDelete = () =>
    dispatch({ type: Actions.DELETE_TODO, payload: todo });

  const handleToggle = () =>
    dispatch({ type: Actions.TOGGLE_TODO, payload: todo });

  return (
    <li>
      <label>
        <input onClick={handleDelete} type="button" value={'Delete'} />
      </label>
      <label>
        <input
          checked={todo.complete}
          onChange={handleToggle}
          type="checkbox"
        />
        {todo.name}
      </label>
    </li>
  );
};
