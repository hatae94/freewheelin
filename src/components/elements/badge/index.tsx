import { memo, useMemo } from 'react';

import type { BadgeProps } from './types';

const Badge = memo((props: BadgeProps) => {
  const { className = '', label } = props;
  const defaultClass = 'flex w-[40px] items-center justify-center rounded-sm bg-neutral-100 py-0.5 text-xs';
  const classes = useMemo(() => [defaultClass, className].join(' '), [className]);
  return <div className={classes}>{label}</div>;
});

export default Badge;
