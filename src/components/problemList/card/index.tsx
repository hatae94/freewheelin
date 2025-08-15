import { useContext, useMemo, memo } from 'react';
import { ProblemContext } from 'providers/problem';
import Card from 'components/elements/card';
import Header from './header';
import Content from './content';

import type { ProblemCardProps } from '../types';

const ProblemCard = memo((props: ProblemCardProps) => {
  const { id, problemNumber, level, problemImageUrl, title, type, answerRate, isSimilarProblem } = props;

  const { activeId } = useContext(ProblemContext);
  const isActive = useMemo(() => activeId === id, [activeId, id]);

  const cardClass = useMemo(() => {
    if (isSimilarProblem) return 'shadow-[0_2px_6px_rgba(0,0,0,0.08)]';
    else if (!isActive) return 'shadow-[0_2px_6px_rgba(41,42,43,0.08)]';
    return '';
  }, [isSimilarProblem, isActive]);
  return (
    <Card
      className={cardClass}
      title={problemNumber.toString()}
      titleSize={isSimilarProblem ? 'text-lg' : 'text-lg xl:text-xl'}
      headerBgColor="zinc-50"
      titleRight={<Header id={id} title={title} isSimilarProblem={isSimilarProblem} />}
      isActive={isActive}>
      <Content level={level} answerRate={answerRate} type={type} problemImageUrl={problemImageUrl} title={title} />
    </Card>
  );
});

export default ProblemCard;
