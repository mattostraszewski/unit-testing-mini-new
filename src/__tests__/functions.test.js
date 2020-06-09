import { add } from '../utils/functions'

test('add returns sum of two intergers', () => {
  expect(add(1, 2)).toBe(3)
})


test('add will add a string and a number together', () => {
  expect(add('12', 5)).toBe(17)
})


test('add returns NaN if non numbers are the arguments', () => {
  expect(add('derp', 'purp')).toBeNaN()
})