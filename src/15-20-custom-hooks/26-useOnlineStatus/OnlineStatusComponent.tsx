import { useOnlineStatus } from './useOnlineStatus';

export const OnlineStatusComponent = () => {
  const online = useOnlineStatus();

  return <div>{online.toString()}</div>;
};
