import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  url: string = 'http://localhost:8084/character/';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any> {
    return this.http.get('https://harry-potter-api-english-production.up.railway.app/characters') as Observable<any>;
  }
}
