import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('search')
  search(@Query('year') searchingYear) {
    return `We are searching for a movie made after ${searchingYear}`;
  }

  @Get(':id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie id: ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    console.log(movieData);

    return movieData;
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return `This will remove a movie id: ${movieId}`;
  }

  @Patch(':id')
  patch(@Param('id') movieId: string, @Body() movieData) {
    return {
      updatedMovieId: movieId,
      ...movieData,
    };
  }
}
