import { createContext } from 'react';

import type { ProblemContextType } from './types';

export const ProblemContext = createContext<ProblemContextType>({ activeId: null, onClick: () => {} });
