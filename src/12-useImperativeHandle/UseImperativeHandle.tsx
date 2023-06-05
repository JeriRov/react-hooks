import React, { FC, useRef, useState } from 'react';

import {
  ConfirmationModal,
  ConfirmationModalHandles,
} from './ConfirmationModal';

export const UseImperativeHandle: FC = () => {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<ConfirmationModalHandles>(null);
  const handleFocusClose = () => modalRef.current?.focusCloseBtn();
  const handleFocusConfirm = () => modalRef.current?.focusConfirmBtn();
  const handleFocusDeny = () => modalRef.current?.focusDenyBtn();
  const handleSetOpen = (isOpen: boolean) => setOpen(isOpen);
  const handleClose = () => handleSetOpen(false);
  return (
    <>
      <button onClick={() => handleSetOpen(true)}>Open Modal</button>
      <button onClick={handleFocusClose}>Focus Close</button>
      <button onClick={handleFocusConfirm}>Focus Confirm</button>
      <button onClick={handleFocusDeny}>Focus Deny</button>
      <ConfirmationModal isOpen={open} onClose={handleClose} ref={modalRef} />
    </>
  );
};
