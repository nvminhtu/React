// @flow
import { Movie } from './movie';

// We instantiate our named class

export function customClass() {
  const movie = new Movie(1000,'Transformer');
  console.log(movie.show());	
}