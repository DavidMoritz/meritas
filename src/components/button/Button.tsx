// components/Button/Button.tsx

import { Link } from '@tanstack/react-router';
import {
  type MouseEvent,
  type MouseEventHandler,
  type ReactNode,
  useMemo,
} from 'react';

import type {
  ButtonSize,
  ButtonTheme,
  ButtonWidth,
} from '@/components/button/Button.types.ts';
import Icon from '@/components/Icon/Icon';
import type { IconOption } from '@/components/Icon/Icon.types';

// import './Button.style.scss';

interface ButtonSharedProps {
  active?: boolean;
  // ariaPressed?: boolean;
  // ariaLabel?: string;
  // ariaLabelledBy?: string;
  autofocus?: boolean;
  children?: ReactNode;
  disabled?: boolean;
  form?: string;
  iconAfter?: IconOption | null;
  iconBefore?: IconOption | null;
  id?: string;
  name?: string;
  size?: ButtonSize;
  tabIndex?: number;
  theme?: ButtonTheme;
  title?: string;
  value?: string | number | readonly string[];
  width?: ButtonWidth;
}

const buildClassString = (props: ButtonSharedProps) => {
  const classes = ['btn'];

  // ADD THEME CLASS
  classes.push(`btn-${props.theme || 'default'}`);

  // ADD SIZE CLASS
  classes.push(`btn-${props.size || 'md'}`);

  // ADD WIDTH CLASS
  classes.push(`btn-${props.width || 'standard'}`);

  // ADD DISABLED CLASS
  if (props.disabled === true) classes.push('disabled');

  // ADD ICON POSITION CLASS
  // if ((props.iconBefore || props.iconAfter) && props.children === undefined) classes.push("icon");
  // if (props.iconBefore) classes.push(`icon-left`);
  // if (props.iconAfter) classes.push(`icon-right`);

  // ADD ACTIVE CLASS
  if (props.active === true) classes.push('active');

  return classes.toString().replace(/,/g, ' ');
};

interface ButtonBaseProps extends ButtonSharedProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
}

const defaultProps: Partial<ButtonBaseProps> = {
  theme: 'default',
  disabled: false,
  size: 'md',
  width: 'standard',
};

const ButtonBase = (props: ButtonBaseProps = defaultProps) => {
  const getClasses = useMemo(() => buildClassString(props), [props]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    // e.preventDefault();
    if (props.onClick) props.onClick(e);
  };

  return (
    <button
      {...(props.autofocus && { autofocus: '' })}
      className={getClasses}
      data-testid="Button"
      disabled={props.disabled}
      form={props.form}
      id={props.id}
      name={props.name}
      onClick={handleClick}
      tabIndex={props.disabled ? -1 : props.tabIndex}
      type={props.type}
      {...(props.disabled && {
        'aria-disabled': 'true',
      })}
      title={props.title}
      value={props.value}
    >
      {props.iconBefore && <Icon icon={props.iconBefore} size={props.size} />}
      {props.children}
      {props.iconAfter && <Icon icon={props.iconAfter} size={props.size} />}
    </button>
  );
};

export interface ButtonProps extends ButtonSharedProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: ButtonProps) => {
  return (
    <ButtonBase theme="primary" {...props} type="button">
      {props.children}
    </ButtonBase>
  );
};

export interface SubmitButtonProps extends ButtonSharedProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const SubmitButton = (props: SubmitButtonProps) => {
  return (
    <ButtonBase theme="primary" {...props} type="submit">
      {props.children}
    </ButtonBase>
  );
};

export interface ResetButtonProps extends ButtonSharedProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const ResetButton = (props: ResetButtonProps) => {
  return (
    <ButtonBase theme="secondary" {...props} type="reset">
      {props.children}
    </ButtonBase>
  );
};

export interface LinkButtonProps extends ButtonBaseProps {
  to: string;
  from?: string;
  params?: Record<string, string | number>;
}

const LinkButton = (props: LinkButtonProps) => {
  const getClasses = useMemo(
    () => buildClassString({ theme: 'link', ...props }),
    [props]
  );

  return (
    <Link
      {...(props.autofocus && { autofocus: '' })}
      className={getClasses}
      data-testid="Button.Link"
      disabled={props.disabled}
      //{...(props.from && { from: props.from })}
      id={props.id}
      tabIndex={props.disabled ? -1 : props.tabIndex}
      to={props.to}
      {...(props.disabled && {
        'aria-disabled': 'true',
      })}
      aria-pressed={props.active}
      params={props.params}
    >
      {props.iconBefore && <Icon icon={props.iconBefore} />}
      {props.children}
      {props.iconAfter && <Icon icon={props.iconAfter} />}
    </Link>
  );
};

interface InputButtonProps extends ButtonBaseProps {
  role?: string;
  value?: string | number | readonly string[];
  children?: never;
}

const inputButtonDefaultProps: Partial<InputButtonProps> = {
  role: 'button',
  theme: 'default',
};

const InputButton = (props: InputButtonProps = inputButtonDefaultProps) => {
  const getClasses = useMemo(() => buildClassString(props), [props]);

  return (
    <input
      type="button"
      {...(props.autofocus && { autofocus: '' })}
      className={getClasses}
      data-testid="Button.Input"
      disabled={props.disabled}
      id={props.id}
      tabIndex={props.disabled ? -1 : props.tabIndex}
      {...(props.disabled && {
        'aria-disabled': 'true',
      })}
      aria-pressed={props.active}
      role={props.role}
      value={props.value}
    />
  );
};

interface ButtonIconProps {
  icon: IconOption;
  position?: 'before' | 'after';
}

const ButtonIcon = (props: ButtonIconProps) => {
  return (
    <Icon
      className={`btn-icon-${props.position || 'before'}`}
      icon={props.icon}
    />
  );
};

Button.Submit = SubmitButton;
Button.Reset = ResetButton;
Button.Link = LinkButton;
Button.Input = InputButton;
Button.Icon = ButtonIcon;

export default Button;
