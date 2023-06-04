import React, { FC } from 'react';

import { useFriendStatus } from './useFriendStatus';

export interface FriendParams {
  id: number;
  name: string;
}

export interface FriendListItemProps {
  friend: FriendParams;
}

export const FriendListItem: FC<FriendListItemProps> = props => {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>{props.friend.name}</li>
  );
};
