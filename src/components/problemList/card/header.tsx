import { memo, useContext, useMemo } from 'react';
import { ProblemContext } from 'providers/problem';
import Button from 'components/elements/button';

import type { ProblemHeaderProps } from '../types';

const Header = memo((props: ProblemHeaderProps) => {
  const { id, title, isSimilarProblem } = props;

  const { activeId, onClick } = useContext(ProblemContext);

  const isActive = useMemo(() => activeId === id, [activeId, id]);
  const leftBtnAttrs = useMemo(() => {
    if (isSimilarProblem) {
      return { icon: 'swap', label: '교체', color: 'text-disabled' };
    }
    return { icon: 'add', label: '유사문제', color: isActive ? 'text-info' : 'text-disabled' };
  }, [isActive, isSimilarProblem]);

  const rightBtnAttrs = useMemo(() => {
    return { icon: isSimilarProblem ? 'add' : 'delete', label: isSimilarProblem ? '추가' : '삭제' };
  }, [isSimilarProblem]);
  return (
    <>
      <span className="text-sm">{title}</span>
      <div className="flex-center-center flex-nowrap gap-2">
        <Button {...leftBtnAttrs} onClick={() => onClick(isSimilarProblem ? 'change' : 'similar', id)} />
        <Button {...rightBtnAttrs} onClick={() => onClick(isSimilarProblem ? 'add' : 'delete', id)} />
      </div>
    </>
  );
});

export default Header;
