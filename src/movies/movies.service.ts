import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll() {
    return this.movies;
  }

  getOne(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === id);

    if (!movie) {
      throw new NotFoundException(`Movie with ID: ${id} not found`);
    }

    return movie;
  }

  create(movieData: CreateMovieDto) {
    const id = this.movies.length + 1;
    this.movies.push({
      ...movieData,
      id,
    });
    return id;
  }

  update(id: number, updateData: UpdateMovieDto) {
    const movie = this.getOne(id);
    this.delete(id);
    this.movies.push({ ...movie, ...updateData });
  }

  delete(id: number) {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== id);
  }
}
