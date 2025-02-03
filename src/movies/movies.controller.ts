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

@Controller('movies')
export class MoviesController {
  constructor(private readonly MovieService: MoviesService) {}

  @Get()
  getAll() {
    return this.MovieService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') movieId: string) {
    return this.MovieService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData) {
    console.log(movieData);

    return this.MovieService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    this.MovieService.delete(movieId);
    return movieId;
  }

  @Patch(':id')
  patch(@Param('id') movieId: string, @Body() movieData) {
    return this.MovieService.update(movieId, movieData);
  }
}
