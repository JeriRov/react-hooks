import React, { forwardRef, useImperativeHandle, useRef } from 'react';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export interface ConfirmationModalHandles {
  focusCloseBtn: () => void;
  focusConfirmBtn: () => void;
  focusDenyBtn: () => void;
}

export const ConfirmationModal = forwardRef<
  ConfirmationModalHandles,
  ConfirmationModalProps
>(({ isOpen, onClose: handleClose }, ref) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const confirmRef = useRef<HTMLButtonElement>(null);
  const denyRef = useRef<HTMLButtonElement>(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        focusCloseBtn: () => closeRef.current?.focus(),
        focusConfirmBtn: () => confirmRef.current?.focus(),
        focusDenyBtn: () => denyRef.current?.focus(),
      };
    },
    [],
  );

  if (!isOpen) return null;
  return (
    <div>
      <button onClick={handleClose} ref={closeRef}>
        &times;
      </button>
      <div>
        <h1>Title</h1>
      </div>
      <div>Do you want to confirm?</div>
      <div>
        <button onClick={handleClose} ref={confirmRef}>
          Yes
        </button>
        <button onClick={handleClose} ref={denyRef}>
          No
        </button>
      </div>
    </div>
  );
});
