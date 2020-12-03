import { describe, expect, it } from '@jest/globals';
import { sum } from './index';

describe('sum(a, b)', () => {
  it('is a function', () => {
    expect(typeof sum).toBe('function');
  });
});
