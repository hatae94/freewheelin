import { useCallback } from 'react';
import { getClasses } from 'utils/ui';
import Card from 'components/elements/card';
import Fallback from 'components/elements/fallback';
import ProblemListError from './error';

import type { ProblemListFallbackProps } from './types';
import type { FallbackProps } from 'react-error-boundary';

export default function ProblemListFallback(props: ProblemListFallbackProps) {
  const { children, widthClass, color, errorTitle } = props;

  const ErrorFallbackUI = useCallback(
    ({ error }: FallbackProps) => (
      <ProblemListError error={error} widthClass={widthClass} color={color} errorTitle={errorTitle} />
    ),
    [widthClass, color, errorTitle]
  );
  return (
    <Fallback
      error={ErrorFallbackUI}
      suspense={
        <Card className={getClasses('flex-[1] animate-pulse', widthClass)} headerBgColor={color} bgColor={color} />
      }>
      {children}
    </Fallback>
  );
}
