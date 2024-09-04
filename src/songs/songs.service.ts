import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  // local db
  // local array

  private readonly songs = [];

  create(song) {
    // save the song in the database
    this.songs.push(song);
    return this.songs;
  }

  findAll() {
    // fetch the songs from the database
    // Errors comes while fetching the data from DB
    // throw new Error('Error in Db while fetching record.');
    return this.songs;
  }
}
