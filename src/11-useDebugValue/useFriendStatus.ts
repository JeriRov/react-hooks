import { useState, useEffect, useDebugValue } from 'react';

interface OnlineStatusParams {
  isOnline: boolean;
}

interface StatusChangeParams {
  ({ isOnline }: OnlineStatusParams): void;
}

const ChatAPI = {
  subscribeToFriendStatus: (
    id: number,
    handleStatusChange: StatusChangeParams,
  ) => {
    handleStatusChange({ isOnline: id % 2 === 0 });
  },
  unsubscribeFromFriendStatus: (
    id: number,
    handleStatusChange: StatusChangeParams,
  ) => {
    handleStatusChange({ isOnline: false });
  },
};

export const useFriendStatus = (friendID: number) => {
  const date = new Date();
  const [isOnline, setIsOnline] = useState<boolean>(false);

  function handleStatusChange(status: OnlineStatusParams) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  // Show a label in DevTools next to this Hook
  // e.g. "FriendStatus: Online"
  // useDebugValue(isOnline ? "Debug Online" : "Debug Offline")

  // Permit to format the text to be exited on debug (can only use one for function)
  useDebugValue(date, date => date.toDateString());

  return isOnline;
};
