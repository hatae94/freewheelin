import { memo, useMemo } from 'react';
import { LevelLabel } from 'constants/problem';

import type { ProblemUI } from '../types';

const ProblemsStatus = memo((props: { problems: ProblemUI[] }) => {
  const { problems } = props;

  const mainProblemInfo = useMemo(() => {
    const info = problems.reduce(
      (p, c) => {
        p[c.level - 1]++;
        return p;
      },
      LevelLabel.map(() => 0)
    );
    return info.map((p, i) => `${LevelLabel[i]} ${p}`).join(' · ');
  }, [problems]);

  const problemCountClass = useMemo(() => {
    const color = problems.length > 0 ? 'text-white' : 'text-danger';
    const fontWeight = problems.length > 0 ? 'font-regular' : 'font-bold';
    return `${color} ${fontWeight}`;
  }, [problems]);
  return (
    <div className="text-disabled flex-end-center gap-2">
      {problems.length > 0 && (
        <>
          <div>{mainProblemInfo}</div>
          <div className="bg-disabled h-[80%] w-[1px]" />
        </>
      )}
      <div className={problemCountClass}>{`문제 수 ${problems.length}개`}</div>
    </div>
  );
});

export default ProblemsStatus;
