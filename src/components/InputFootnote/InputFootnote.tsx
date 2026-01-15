// InputFootnote.tsx

import type { FC, ReactNode } from 'react';

export interface InputFootnoteProps {
  children?: ReactNode;
}

const InputFootnote: FC<InputFootnoteProps> = (props: InputFootnoteProps) => {
  return (
    <div className="mt-1 text-gray-500 text-xs" data-testid="InputFootnote">
      {props.children}
    </div>
  );
};

export default InputFootnote;
