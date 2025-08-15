import { memo, useMemo } from 'react';

import type { ButtonProps } from './types';

const Button = memo((props: ButtonProps) => {
  const { label, icon, color = 'text-disabled', size = 'text-xs', iconSize = 'text-base', onClick } = props;
  const hoverClass = useMemo(() => (onClick ? 'hover:bg-[rgba(0,0,0,0.05)] cursor-pointer' : ''), [onClick]);
  return (
    <button className={`rounded-xs p-1 ${color} ${hoverClass}`} onClick={onClick}>
      <div className={`flex flex-nowrap items-center justify-between gap-1 ${size}`}>
        <i className={`icon-${icon} ${iconSize}`} />
        <span className="text-nowrap">{label}</span>
      </div>
    </button>
  );
});

export default Button;
