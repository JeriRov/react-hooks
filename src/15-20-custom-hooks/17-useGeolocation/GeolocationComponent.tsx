import { useGeolocation } from './useGeolocation';

export const GeolocationComponent = () => {
  const {
    loading,
    error,
    data: { latitude, longitude },
  } = useGeolocation(undefined);

  return (
    <>
      <div>Loading: {loading.toString()}</div>
      <div>Error: {error?.message}</div>
      <div>
        {latitude} x {longitude}
      </div>
    </>
  );
};
