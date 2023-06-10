import { useCookie } from './useCookie';

export const CookieComponent = () => {
  const [value, handleUpdate, handleRemove] = useCookie('name', 'John');

  return (
    <>
      <div>{value}</div>
      <button onClick={() => handleUpdate('Sally')}>
        Change Name To Sally
      </button>
      <button onClick={handleRemove}>Delete Name</button>
    </>
  );
};
