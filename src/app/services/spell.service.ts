import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Spell } from '../models/spell';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SpellService {

  url: string = 'http://localhost:8084/spell/';
  favUrl: string = 'http://localhost:8084/favourite/spell/';
  apiUrl: string = 'https://wizard-world-api.herokuapp.com/Spells/';

  constructor(private http: HttpClient) { }

  getSpells(): Observable<any> {
    return this.http.get(this.apiUrl) as Observable<any>;
  }

  addFavorite(spellId: string): Observable<unknown> {
    return this.http.post(this.favUrl + spellId, null,{ withCredentials: true });
  }

  getMyFavorites(): Observable<any> {
    return this.http.get(this.favUrl, { withCredentials: true }) as Observable<any>;
  }

  getFavorite(id:string): Observable<any>{
    return this.http.get(this.apiUrl+id) as Observable<Spell>;
  }

  deleteFavorite(spellId: string): Observable<unknown> {
    return this.http.delete(this.favUrl + spellId, { withCredentials: true });
  }


}
