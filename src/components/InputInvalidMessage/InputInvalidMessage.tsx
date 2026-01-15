// components/InputInvalidMessage/InputInvalidMessage.tsx

import Icon from '../Icon/Icon';

export interface InputInvalidMessageProps {
  message?: string;
}

const InputInvalidMessage = (props: InputInvalidMessageProps) => {
  return (
    <div
      className="flex h-6 min-h-6 items-center gap-1.25 text-red-800 text-xs leading-6;"
      data-testid="InputInvalidMessage"
    >
      <Icon icon="warning" size="sm" /> {props.message}
    </div>
  );
};

export default InputInvalidMessage;
