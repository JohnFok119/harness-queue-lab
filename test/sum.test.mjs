import test from 'node:test';
import assert from 'node:assert/strict';
import { sum } from '../src/sum.mjs';

test('adds positives', () => assert.equal(sum(1, 2), 3));
test('adds negatives', () => assert.equal(sum(-1, -2), -3));
