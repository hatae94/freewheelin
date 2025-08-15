export const getClasses = (classA: string, classB: string = '') => {
  return [...classA.split(' '), ...classB.split(' ')].join(' ');
};
