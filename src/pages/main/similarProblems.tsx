import { forwardRef, useCallback, useContext, useImperativeHandle, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import mathflat from 'apis/mathflat';
import { ProblemContext } from 'providers/problem';
import { queryClient } from 'providers/reactQuery';
import ProblemList from 'components/problemList';

import type { Problem } from 'apis/types';
import type { SimilarProblemsRef } from './types';

const SimilarProblems = forwardRef<SimilarProblemsRef>((_, ref) => {
  const { activeId } = useContext(ProblemContext);

  const queryKey = activeId ? ['similarProblems'] : ['similarProblems', activeId];
  const queryFn = useCallback(() => {
    const mainProblems = queryClient.getQueryData<Problem[]>(['problems']) || [];
    const mainProblemIds = mainProblems.map((p) => p.id);
    return mathflat.getSimilarProblems(activeId as number, mainProblemIds);
  }, [activeId]);

  const similarProblemParams = { queryKey, queryFn, enabled: Boolean(activeId) };
  const { data, refetch, isLoading, isRefetching } = useQuery<Problem[]>(similarProblemParams);
  const similarProblems = useMemo(() => (data || []).map((p, i) => ({ ...p, problemNumber: i + 1 })), [data]);

  useImperativeHandle(ref, () => ({ refetch }));

  return (
    <ProblemList
      title="유사 문항"
      color="em"
      problems={similarProblems}
      loading={isLoading || isRefetching}
      isSimilarProblem
    />
  );
});

export default SimilarProblems;
