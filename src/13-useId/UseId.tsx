import { FC } from 'react';

import { EmailForm } from './EmailForm';

export const UseId: FC = () => {
  return (
    <>
      <EmailForm />
      <article style={{ marginBlock: '1rem' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        adipisci alias aliquid amet aperiam.
      </article>
      <EmailForm />
    </>
  );
};
