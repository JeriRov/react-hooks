import { useRef, useState } from 'react';

import { useClickOutside } from './useClickOutside';

export const ClickOutsideComponent = () => {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside(modalRef, () => {
    console.log(open);
    if (open) setOpen(false);
  });

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <button onClick={handleOpen}>Open</button>
      <div
        ref={modalRef}
        style={{
          display: open ? 'block' : 'none',
          backgroundColor: 'blue',
          color: 'white',
          width: '100px',
          height: '100px',
          position: 'absolute',
          top: 'calc(50% - 50px)',
          left: 'calc(50% - 50px)',
        }}>
        <span>Modal</span>
      </div>
    </>
  );
};
