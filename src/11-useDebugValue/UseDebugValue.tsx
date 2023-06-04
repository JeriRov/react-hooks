import React from 'react';

import { FriendListItem } from './FriendListIrem';

export const UseDebugValue = () => {
  return (
    <div className="App">
      <FriendListItem friend={{ id: 1, name: 'user 1' }} />
      <FriendListItem friend={{ id: 2, name: 'user 2' }} />
      <FriendListItem friend={{ id: 3, name: 'user 3' }} />
      <FriendListItem friend={{ id: 4, name: 'user 4' }} />
      <FriendListItem friend={{ id: 5, name: 'user 5' }} />
      <FriendListItem friend={{ id: 6, name: 'user 6' }} />
    </div>
  );
};
