import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';
import { MarvelResponse } from '../models/marvel-response.model';
import { MarvelService } from './marvel.service';

@Injectable({
  providedIn: 'root',
})
export class CharactersService extends MarvelService {
  constructor(private httpClient: HttpClient) {
    super();
  }

  getCharacters(nameStartsWith: string): Observable<MarvelResponse<Character>> {
    return this.httpClient.get<MarvelResponse<Character>>(
      `${this.BASE_URL}/characters`,
      {
        params: new HttpParams().set('nameStartsWith', nameStartsWith),
      }
    );
  }
}
