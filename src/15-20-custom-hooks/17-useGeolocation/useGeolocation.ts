import { useState, useEffect } from 'react';

export const useGeolocation = (options: PositionOptions | undefined) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<GeolocationPositionError | null>();
  const [data, setData] = useState<GeolocationCoordinates>(
    {} as GeolocationCoordinates,
  );

  useEffect(() => {
    const successHandler = (e: GeolocationPosition) => {
      setLoading(false);
      setError(null);
      setData(e.coords);
    };
    const errorHandler = (e: GeolocationPositionError) => {
      setError(e);
      setLoading(false);
    };
    navigator.geolocation.getCurrentPosition(
      successHandler,
      errorHandler,
      options,
    );
    const id = navigator.geolocation.watchPosition(
      successHandler,
      errorHandler,
      options,
    );
    return () => navigator.geolocation.clearWatch(id);
  }, [options]);

  return { loading, error, data };
};
