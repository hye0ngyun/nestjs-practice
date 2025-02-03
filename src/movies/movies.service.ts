import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll() {
    return this.movies;
  }

  getOne(id: string) {
    console.log(id);
    console.log(this.movies);

    return this.movies.find((movie) => movie.id === +id);
  }

  create(movieData: Movie) {
    const id = this.movies.length + 1;
    this.movies.push({
      ...movieData,
      id,
    });
    return id;
  }

  delete(id: string) {
    this.movies = this.movies.filter((movie) => movie.id !== +id);
    return true;
  }
}
