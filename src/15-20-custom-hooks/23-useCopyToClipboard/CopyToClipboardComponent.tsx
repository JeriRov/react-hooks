import { useRef } from 'react';

import { useCopyToClipboard } from './useCopyToClipboard';

export const CopyToClipboardComponent = () => {
  const [copyToClipboard, { success }] = useCopyToClipboard();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCopy = () =>
    copyToClipboard(inputRef.current?.value ? inputRef.current?.value : '');

  return (
    <>
      <button onClick={handleCopy}>{success ? 'Copied' : 'Copy Text'}</button>
      <input disabled={success} ref={inputRef} type="text" />
    </>
  );
};
