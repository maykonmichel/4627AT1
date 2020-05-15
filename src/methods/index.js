import { evaluate } from 'mathjs';

import aureaSection from './aureaSection';
import bisection from './bisection';
import dichotomousSearch from './dichotomousSearch';
import fibonacciSearch from './fibonacciSearch';
import newton from './newton';
import uniformSearch from './uniformSearch';

const methods = {
  aureaSection,
  bisection,
  dichotomousSearch,
  fibonacciSearch,
  newton,
  uniformSearch,
};

export default (method, { f, ...args }) =>
  methods[method]({ fn: f, f:(x) => evaluate(f, { x }), ...args });
