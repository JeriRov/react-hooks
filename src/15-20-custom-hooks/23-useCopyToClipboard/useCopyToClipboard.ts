import { useState } from 'react';

import copy from 'copy-to-clipboard';

import { Options } from './useCopyToClipboard.types';

export const useCopyToClipboard = (): [
  (text: string, options?: Options) => void,
  { value?: string; success?: boolean },
] => {
  const [value, setValue] = useState<string>();
  const [success, setSuccess] = useState<boolean>();

  const copyToClipboard = (
    text: string,
    options: Options | undefined = undefined,
  ) => {
    const result = copy(text, options);
    if (result) setValue(text);
    setSuccess(result);
  };

  return [copyToClipboard, { value, success }];
};
