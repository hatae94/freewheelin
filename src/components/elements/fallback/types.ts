import type { FallbackProps as ErrorFabackProps } from 'react-error-boundary';

export type FallbackProps = {
  error: (errorProps: ErrorFabackProps) => React.JSX.Element;
  suspense: React.ReactNode;
  children: React.ReactNode;
};
