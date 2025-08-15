import { memo, useMemo } from 'react';
import { getClasses } from 'utils/ui';

import type { CardProps } from './types';

const CardColorMap = {
  white: { bg: 'bg-white', border: 'border-white' },
  'zinc-50': { bg: 'bg-zinc-50', border: 'border-zinc-50' },
  dim: { bg: 'bg-dim', border: 'border-dim' },
  em: { bg: 'bg-em', border: 'border-em' },
};

type CardColorMapType = keyof typeof CardColorMap;

const Card = memo((props: CardProps) => {
  const {
    children,
    className,
    headerClass,
    title,
    headerBgColor = 'white',
    bgColor = 'white',
    titleSize = 'text-xl',
    titleColor = 'text-dim-2',
    titleRight,
    isActive,
    footerRightComponent,
  } = props;

  const containerClass = useMemo(() => getClasses('max-w-full flex-col', className), [className]);

  const headerColor = useMemo(() => {
    const { bg, border } = CardColorMap[headerBgColor as CardColorMapType];
    return `${bg} ${isActive ? 'border-info' : border}`;
  }, [headerBgColor, isActive]);

  const headerClassName = useMemo(() => {
    const classes = `flex rounded-t-xl border-3 border-b-0 px-4 py-3 gap-4 ${headerColor}`;
    return getClasses(classes, headerClass);
  }, [headerColor, headerClass]);

  const titleClass = useMemo(() => {
    const width = titleRight ? 'w-12' : 'flex-[1]';
    const flex = titleRight ? 'flex-center-center' : 'flex-start-center';
    return `flex-center-center font-bold ${width} ${flex} ${titleSize} ${titleColor}`;
  }, [titleRight, titleSize, titleColor]);

  const contentColor = useMemo(() => {
    const { bg, border } = CardColorMap[bgColor as CardColorMapType];
    return `${bg} ${isActive ? 'border-info' : border}`;
  }, [bgColor, isActive]);

  return (
    <div className={containerClass}>
      <div className={headerClassName}>
        <div className={titleClass}>{title}</div>
        {titleRight && <div className="flex-between-center flex-[1] flex-wrap lg:flex-nowrap">{titleRight}</div>}
      </div>
      <div
        className={`flex h-full w-full flex-col gap-4 overflow-hidden rounded-b-xl border-3 border-t-0 p-4 ${contentColor}`}>
        {children}
        {footerRightComponent}
      </div>
    </div>
  );
});

export default Card;
