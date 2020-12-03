import { describe, expect, it, test } from '@jest/globals';
import { sum, division, sqrt } from './index';

describe('sum(a, b)', () => {
  it('is a function', () => {
    expect(typeof sum).toBe('function');
  });
});

describe('division(a, b)', () => {
  test.todo('All tests related to division');
});

describe('sqrt(x)', () => {
  test.todo('All tests related to sqrt');
});
