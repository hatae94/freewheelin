import { memo, useState } from 'react';
import { LevelColor, LevelLabel, TypeLabel } from 'constants/problem';
import Badge from 'components/elements/badge';

import type { ProblemUI } from '../types';

const Content = memo((props: Pick<ProblemUI, 'level' | 'answerRate' | 'type' | 'problemImageUrl' | 'title'>) => {
  const { level, answerRate, type, problemImageUrl, title } = props;
  const [loading, setLoading] = useState(true);
  return (
    <div className="flex h-full w-full gap-4 pb-4">
      <div className="flex w-12 flex-col items-center gap-1">
        <Badge className={LevelColor[level - 1]} label={LevelLabel[level - 1]} />
        <Badge className="text-dim-3" label={`${answerRate}%`} />
        <Badge className="text-dim-4" label={TypeLabel[type - 1]} />
      </div>
      <div className="relative w-full">
        {loading && <div className="bg-em absolute container h-full w-full animate-pulse rounded-lg object-contain" />}
        <img
          className="container aspect-auto w-full object-contain"
          src={problemImageUrl}
          alt={title}
          loading="lazy"
          decoding="async"
          width="400"
          height="300"
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
        />
      </div>
    </div>
  );
});

export default Content;
