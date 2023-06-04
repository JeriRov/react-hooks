import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import { router } from '../router';

export const UseReducer: FC = () => {
  return (
    <>
      <Link to={router.numberIncrementor.path}>
        <h2>Number Incrementor</h2>
      </Link>
      <Link to={router.todo.path}>
        <h2>Todo</h2>
      </Link>
    </>
  );
};
