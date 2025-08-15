import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import type { FallbackProps } from './types';

export default function Fallback(props: FallbackProps) {
  const { error, suspense, children } = props;
  return (
    <ErrorBoundary FallbackComponent={error}>
      <Suspense fallback={suspense}>{children}</Suspense>
    </ErrorBoundary>
  );
}
