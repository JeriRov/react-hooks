import { FC, useReducer } from 'react';

enum Actions {
  INCREMENT = 'increment',
  DECREMENT = 'decrement',
}

interface ReducerParams {
  type: Actions;
  payload: number;
}

interface StateParams {
  count: number;
}

const reducer = (state: StateParams, action: ReducerParams) => {
  const { type, payload } = action;

  switch (type) {
    case Actions.INCREMENT:
      return {
        ...state,
        count: state.count + payload,
      };
    case Actions.DECREMENT:
      return {
        ...state,
        count: state.count - payload,
      };
    default:
      return state;
  }
};

export const NumberIncrementor: FC = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleIncrement = () =>
    dispatch({ type: Actions.INCREMENT, payload: 1 });
  const handleDecrement = () =>
    dispatch({ type: Actions.DECREMENT, payload: 1 });

  return (
    <>
      <button onClick={handleDecrement}>-</button>
      <span>{state.count}</span>
      <button onClick={handleIncrement}>+</button>
    </>
  );
};
