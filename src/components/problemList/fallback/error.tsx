import { getClasses } from 'utils/ui';
import Card from 'components/elements/card';

import type { FallbackProps } from 'react-error-boundary';
import type { ProblemListFallbackProps } from './types';

export default function ProblemListError(
  props: Omit<ProblemListFallbackProps, 'children'> & Pick<FallbackProps, 'error'>
) {
  const { error, widthClass, color, errorTitle } = props;
  return (
    <Card className={getClasses('flex-[1]', widthClass)} headerBgColor={color} bgColor={color} title={errorTitle}>
      <div className="flex-center-start-col gap-3 bg-white">
        <div>아래 에러가 발생하였습니다.</div>
        <div>{error?.message || ''}</div>
      </div>
    </Card>
  );
}
