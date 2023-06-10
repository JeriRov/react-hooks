import { useScript } from './useScript';

export const ScriptComponent = () => {
  const { loading, error } = useScript(
    'https://code.jquery.com/jquery-3.6.0.min.js',
  );

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <div>{window.$(window).width()}</div>;
};
