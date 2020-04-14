import { evaluate } from 'mathjs';

import dichotomousSearch from './dichotomousSearch';

const methods = {
  dichotomousSearch,
};

export default (method, { f, ...args }) =>
  methods[method]({ f: (x) => evaluate(f, { x }), ...args });
