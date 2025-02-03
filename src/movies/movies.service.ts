import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll() {
    return this.movies;
  }

  getOne(id: string): Movie {
    const movie = this.movies.find((movie) => movie.id === +id);

    if (!movie) {
      throw new NotFoundException(`Movie with ID: ${id} not found`);
    }

    return movie;
  }

  create(movieData: Movie) {
    const id = this.movies.length + 1;
    this.movies.push({
      ...movieData,
      id,
    });
    return id;
  }

  update(id: string, updateData) {
    const movie = this.getOne(id);
    this.delete(id);
    this.movies.push({ ...movie, ...updateData });
  }

  delete(id: string) {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== +id);
  }
}
