import Button from 'components/elements/button';

import type { EmptyProps } from './types';

export default function Empty(props: EmptyProps) {
  const { isSimilarProblem } = props;

  const textTop = isSimilarProblem ? '버튼을 누르면' : '학습지 문제수가 없습니다.';
  const textBottom = isSimilarProblem
    ? '제를 추가 또는 교체할수 있습니다.'
    : '다음단계로 넘어가기 위해 문제를 추가해주세요.';

  const textColor = isSimilarProblem ? 'text-dim-2' : 'text-white';
  return (
    <div className="flex-center-center h-full text-sm">
      <div className={`flex-center-center-col gap-1 ${textColor}`}>
        <div className="flex gap-2">
          {isSimilarProblem && (
            <Button icon="add" color="bg-white text-disabled" size="text-[9px]" iconSize="text-xs" label="유사문제" />
          )}
          <span className="whitespace-pre-line">{textTop}</span>
        </div>
        <span className="whitespace-pre-line">{textBottom}</span>
      </div>
    </div>
  );
}
