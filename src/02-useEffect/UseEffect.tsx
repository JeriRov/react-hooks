import { FC, useEffect, useState } from 'react';

import { ScreenResizeChecker } from './ScreenResizeChecker';

export const UseEffect: FC = () => {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json));
  }, [resourceType]);

  const handlePosts = () => setResourceType('posts');
  const handleUsers = () => setResourceType('users');
  const handleComments = () => setResourceType('comments');

  return (
    <>
      <ScreenResizeChecker />
      <div>
        <button onClick={handlePosts}>Posts</button>
        <button onClick={handleUsers}>Users</button>
        <button onClick={handleComments}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item: object, index) => {
        return <pre key={index}>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
};
