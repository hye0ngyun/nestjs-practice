import { IsNumber, IsOptional, IsString } from 'class-validator';

// DTO: Data Transfer Object
export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsString({ each: true })
  @IsOptional()
  readonly genres: string[];
}
