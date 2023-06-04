import { FC, useLayoutEffect, useRef, useState } from 'react';

export const UseLayoutEffect: FC = () => {
  const [show, setShow] = useState(false);
  const popup = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  useLayoutEffect(() => {
    if (popup.current == null || button.current == null) return;
    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = `${bottom + 25}px`;
  }, [show]);

  const handleToggle = () => setShow(!show);

  return (
    <>
      <button onClick={handleToggle} ref={button}>
        Toggle
      </button>
      {show ? (
        <div ref={popup} style={{ position: 'absolute', left: '10px' }}>
          This is a popup!
        </div>
      ) : null}
    </>
  );
};
