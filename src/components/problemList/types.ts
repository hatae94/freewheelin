import type { Problem } from 'apis/types';

export type ProblemUI = {
  problemNumber: number;
} & Problem;

export type ProblemCardProps = {
  isSimilarProblem?: boolean;
} & ProblemUI;

export type ProblemListProps = {
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
  color: string;
  title?: string;
  titleColor?: string;
  problems: ProblemUI[];
  useStatus?: boolean;
  isSimilarProblem?: boolean;
  loading?: boolean;
};

export type ProblemHeaderProps = {
  isSimilarProblem?: boolean;
} & Pick<ProblemUI, 'id' | 'title'>;
