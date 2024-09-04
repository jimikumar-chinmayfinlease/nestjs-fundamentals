import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Scope,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
import { Connection } from 'src/common/constants/connection';
import { Song } from './song.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UpdateSongDto } from './dto/update-song.dto';

@Controller({ path: 'songs', scope: Scope.REQUEST })
export class SongsController {
  constructor(
    private songsService: SongsService,
    @Inject('CONNECTION')
    private connection: Connection,
  ) {
    console.log(
      `THIS IS CONNECTION STRING ${this.connection.CONNECTION_STRING}`,
    );
  }

  @Post()
  create(@Body() createSongDTO: CreateSongDTO): Promise<Song> {
    return this.songsService.create(createSongDTO);
  }

  @Get()
  findAll(): Promise<Song[]> {
    try {
      return this.songsService.findAll();
    } catch (error) {
      throw new HttpException(
        'Server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        // HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ): Promise<Song> {
    return this.songsService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSongDTO: UpdateSongDto,
  ): Promise<UpdateResult> {
    return this.songsService.update(id, updateSongDTO);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.songsService.remove(id);
  }
}
