import { useMemo } from 'react';
import { getClasses } from 'utils/ui';
import ProblemCard from './card';
import ProblemsStatus from './status';
import Card from 'components/elements/card';
import Empty from './empty';

import type { ProblemListProps } from './types';

export default function ProblemList(props: ProblemListProps) {
  const { className, color, title, titleColor, problems = [], useStatus, loading, isSimilarProblem = false } = props;
  const classList = useMemo(() => {
    let classes = 'flex-[1] max-h-full overflow-hidden';
    if (loading) classes += ' animate-pulse pointer-events-none';
    return getClasses(classes, className);
  }, [className, loading]);
  const isEmpty = useMemo(() => problems.length === 0, [problems]);
  return (
    <Card
      className={classList}
      title={isEmpty && isSimilarProblem ? '' : title}
      headerClass="pb-0"
      titleSize="text-base"
      titleColor={titleColor}
      headerBgColor={color}
      bgColor={color}
      footerRightComponent={useStatus ? <ProblemsStatus problems={problems} /> : null}>
      <div className="flex flex-[1] flex-col gap-4 overflow-auto">
        {loading || isEmpty ? (
          <Empty isSimilarProblem={isSimilarProblem} />
        ) : (
          problems.map((problem) => <ProblemCard key={problem.id} {...problem} isSimilarProblem={isSimilarProblem} />)
        )}
      </div>
    </Card>
  );
}
