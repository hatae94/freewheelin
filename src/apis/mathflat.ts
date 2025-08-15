import Request from 'utils/request';
import type { Problem } from './types';

const request = new Request('http://assignment.mathflat.com');

class Mathflat {
  async getProblems() {
    const result = await request.get('problems');
    return result;
  }

  async getSimilarProblems(problemId: number, excludedProblemIds: Problem['id'][]) {
    const result = await request.get(`problems/${problemId}/similarity?excludedProblemIds=${excludedProblemIds}`);
    return result;
  }
}

const mathflat = new Mathflat();

export default mathflat;
