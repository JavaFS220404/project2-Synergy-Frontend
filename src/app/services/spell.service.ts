import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Spell } from '../models/spell';

@Injectable({
  providedIn: 'root'
})
export class SpellService {

  url: string = 'http://localhost:8084/spell/';
  favUrl: string = 'http://localhost:8084/favourite/spell/';

  constructor(private http: HttpClient) { }

  getSpells(): Observable<any> {
    return this.http.get('https://wizard-world-api.herokuapp.com/Spells/') as Observable<any>;
  }

  addFavorite(spellId: string): Observable<unknown> {
    return this.http.post(this.favUrl + spellId, { withCredentials: true });
  }


}
