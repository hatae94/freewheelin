import type { PropsWithChildren } from 'react';

export type CardProps = PropsWithChildren<{
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
  headerClass?: React.HTMLAttributes<HTMLDivElement>['className'];
  title?: string;
  titleSize?: string;
  titleColor?: string;
  headerBgColor?: string;
  bgColor?: string;
  titleRight?: React.ReactNode;
  isActive?: boolean;
  footerRightComponent?: React.ReactNode;
}>;
