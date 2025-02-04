import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly MovieService: MoviesService) {}

  @Get()
  getAll() {
    return this.MovieService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') movieId: number) {
    console.log(typeof movieId);

    return this.MovieService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    console.log(movieData);

    return this.MovieService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    this.MovieService.delete(movieId);
    return movieId;
  }

  @Patch(':id')
  patch(@Param('id') movieId: number, @Body() movieData: UpdateMovieDto) {
    return this.MovieService.update(movieId, movieData);
  }
}
