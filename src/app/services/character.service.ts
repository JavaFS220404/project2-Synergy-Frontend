import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  url: string = 'http://localhost:8084/character/';
  favUrl: string = 'http://localhost:8084/favourite/character/';
  apiUrl: string = 'https://harry-potter-api-english-production.up.railway.app/characters/';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any> {
    return this.http.get(this.apiUrl) as Observable<any>;
  }

  addFavorite(characterId: string): Observable<unknown> {
    return this.http.post(this.favUrl + characterId,null, { withCredentials: true });
  }

  getMyFavorites(): Observable<any> {
    return this.http.get(this.favUrl, { withCredentials: true }) as Observable<any>;
  }

  getFavorite(id: number): Observable<any> {
    return this.http.get(this.apiUrl + id) as Observable<Character>;
  }

  deleteFavorite(charId: string): Observable<unknown> {
    return this.http.delete(this.favUrl + charId, { withCredentials: true });
  }

}
