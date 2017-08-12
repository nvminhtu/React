import { Dog } from './Dog';

const dog =  new Dog();

test('adds 1 + 2 to equal 3', () => {
  expect(dog.sum(1, 2)).toBe(3); // testing with JEST
});
