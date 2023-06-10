import { useState } from 'react';

import { useFetch } from './useFetch';

export const FetchComponent = () => {
  const [id, setId] = useState(1);
  const { loading, error, value } = useFetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {},
    [id],
  );

  const handleIncrementId = () => setId(currentId => currentId + 1);

  return (
    <div>
      <div>{id}</div>
      <button onClick={handleIncrementId}>Increment ID</button>
      <div>Loading: {loading.toString()}</div>
      <div>{JSON.stringify(error, null, 2)}</div>
      <div>{JSON.stringify(value, null, 2)}</div>
    </div>
  );
};
