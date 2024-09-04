import { Injectable, Scope } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Song } from './song.entity';
import { CreateSongDTO } from './dto/create-song-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateSongDto } from './dto/update-song.dto';

@Injectable({
  scope: Scope.TRANSIENT,
})
export class SongsService {
  constructor(
    @InjectRepository(Song)
    private songRepository: Repository<Song>,
  ) {}

  create(songDTO: CreateSongDTO): Promise<Song> {
    const song = new Song();
    song.title = songDTO.title;
    // song.artists = songDTO.artists;
    song.duration = songDTO.duration;
    song.lyrics = songDTO.lyrics;
    song.releasedDate = songDTO.releasedDate;

    return this.songRepository.save(song);
  }

  findAll(): Promise<Song[]> {
    return this.songRepository.find();
  }

  findOne(id: number): Promise<Song> {
    return this.songRepository.findOneBy({ id });
  }

  remove(id: number): Promise<DeleteResult> {
    return this.songRepository.delete(id);
  }

  update(id: number, recordToUpdate: UpdateSongDto): Promise<UpdateResult> {
    return this.songRepository.update(id, recordToUpdate);
  }
}
