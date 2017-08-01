import Movie from './movie'

test('Movie.show', () => {
  const testMovie = new Movie('Test')
  expect(testMovie.show()).toBe('This is new movie')
})
