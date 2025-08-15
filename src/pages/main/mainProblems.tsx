import { useMemo } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import mathflat from 'apis/mathflat';
import ProblemList from 'components/problemList';

import type { Problem } from 'apis/types';

export default function MainProblems() {
  const mainProblemParams = { queryKey: ['problems'], queryFn: mathflat.getProblems, staleTime: Infinity };
  const { data } = useSuspenseQuery<Problem[]>(mainProblemParams);

  const mainProblems = useMemo(() => (data || []).map((p, i) => ({ ...p, problemNumber: i + 1 })), [data]);
  return (
    <ProblemList
      className="xl:flex-[1.413]"
      title="학습지 상세 편집"
      titleColor="text-white"
      color="dim"
      problems={mainProblems}
      useStatus
    />
  );
}
