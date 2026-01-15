// components/Icon/Icon.tsx

import type React from 'react';
import { Suspense } from 'react';

import type { IconOption, IconSize, IconTheme } from './Icon.types.ts';
import { IconMap } from './Icons.map.tsx';

// import './Icon.style.scss';

export interface IconProps {
  icon: IconOption;
  className?: string;
  id?: string;
  role?: 'icon' | 'graphic' | 'img';
  size?: IconSize;
  theme?: IconTheme;
  title?: string;
  viewBox?: string;
}

const Icon: React.FC<IconProps> = ({
  icon,
  className = '',
  id,
  role = 'icon',
  size,
  theme = 'default',
  title,
  viewBox,
}) => {
  const style: React.CSSProperties = {};

  if (size !== undefined) {
    style.height = `${size}px`;
    style.width = `${size}px`;
  }

  const classes = `icon ${theme} ${size || 'md'} ${className}`.trim();

  return (
    <Suspense fallback={<span className={classes} style={style} />}>
      <span
        className={classes}
        data-testid="Icon"
        {...{ id, role, style, title }}
      >
        <svg
          aria-label={title || (role === 'img' ? icon : undefined)}
          fill="currentColor"
          preserveAspectRatio="xMidYMid meet"
          role={role === 'img' ? 'img' : undefined}
          viewBox={viewBox || '0 0 256 256'}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          {title && <title>{title}</title>}
          {IconMap[icon || 'circle']}
        </svg>
      </span>
    </Suspense>
  );
};

export default Icon;
