import { useCallback, useMemo, useRef, useState } from 'react';
import { queryClient } from 'providers/reactQuery';
import { ProblemContext } from 'providers/problem';
import MainProblems from './mainProblems';
import SimilarProblems from './similarProblems';
import ProblemListFallback from 'components/problemList/fallback';

import type { Problem } from 'apis/types';
import type { SimilarProblemsRef } from './types';

export default function Main() {
  const similarProblemsRef = useRef<SimilarProblemsRef>(null);
  const [problemId, setProblemId] = useState<number | null>(null);
  const activeId = useMemo(() => problemId, [problemId]);

  const addProblem = (originProblems: Problem[], index: number, problem: Problem) => {
    const newMainProvlems = [...originProblems];
    newMainProvlems.splice(index + 1, 0, problem);
    return newMainProvlems;
  };

  const changeProblem = (originProblems: Problem[], id: number, problem: Problem) => {
    return originProblems.map((p) => (p.id === id ? problem : p));
  };

  const deleteProblem = (originProblems: Problem[], id: number) => {
    return originProblems.filter((p) => p.id !== id);
  };

  const handleSimilarProblem = useCallback(
    (id: number) => {
      const isSameProblem = activeId === id;
      setProblemId(isSameProblem ? null : id);

      if (activeId && !isSameProblem) similarProblemsRef.current?.refetch?.();
    },
    [activeId]
  );

  const handleDeleteProblem = useCallback(
    (id: number) => {
      if (activeId === id) setProblemId(null);
      queryClient.setQueryData(['problems'], (oldProblems: Problem[]) => deleteProblem(oldProblems, id));
    },
    [activeId]
  );

  const handleChangeProblem = useCallback(
    (type: 'change' | 'add', id: number) => {
      const mainProblems = queryClient.getQueryData<Problem[]>(['problems']) || [];
      const similarProblems = queryClient.getQueryData<Problem[]>(['similarProblems']) || [];

      const activeProblemIndex = mainProblems.findIndex((p) => p.id === activeId);
      const activeProblem = mainProblems[activeProblemIndex];
      const similarProblem = similarProblems.find((p) => p.id === id) as Problem;

      queryClient.setQueryData(['problems'], (oldProblems: Problem[]) => {
        let newProblems = [];
        if (type === 'change') newProblems = changeProblem(oldProblems, activeId as number, similarProblem);
        else newProblems = addProblem(oldProblems, activeProblemIndex, similarProblem);
        return newProblems;
      });

      queryClient.setQueryData(['similarProblems'], (oldProblems: Problem[]) => {
        let newProblems = [];
        if (type === 'change') newProblems = changeProblem(oldProblems, id, activeProblem);
        else newProblems = deleteProblem(oldProblems, id);
        return newProblems;
      });

      if (type === 'change') setProblemId(id);
    },
    [activeId]
  );

  const onClick = useCallback(
    (type: string, id: number) => {
      if (type === 'similar') {
        handleSimilarProblem(id);
      } else if (type === 'delete') {
        handleDeleteProblem(id);
      } else if (['change', 'add'].includes(type)) {
        handleChangeProblem(type as 'change' | 'add', id);
      }
    },
    [handleSimilarProblem, handleDeleteProblem, handleChangeProblem]
  );

  return (
    <ProblemContext.Provider value={{ activeId, onClick }}>
      <div className="flex h-screen w-screen justify-center p-4">
        <div className="h-full w-full flex-col gap-4 sm:flex-row xl:w-[1280px]">
          <ProblemListFallback errorTitle="유사문제 가져오기에 실패하였습니다." color="em">
            <SimilarProblems ref={similarProblemsRef} />
          </ProblemListFallback>
          <ProblemListFallback
            widthClass="xl:flex-[1.413]"
            errorTitle="학습지 문제 가져오기에 실패하였습니다."
            color="dim">
            <MainProblems />
          </ProblemListFallback>
        </div>
      </div>
    </ProblemContext.Provider>
  );
}
