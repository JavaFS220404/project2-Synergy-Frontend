import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Potion } from '../models/potion';

@Injectable({
  providedIn: 'root'
})
export class PotionService {

  url: string = 'http://localhost:8084/potion/';
  favUrl: string = 'http://localhost:8084/favourite/potion/';

  constructor(private http: HttpClient) { }

  getPotions(): Observable<any> {
    return this.http.get('https://wizard-world-api.herokuapp.com/Elixirs/') as Observable<any>;
  }

  addFavorite(potionId: string): Observable<unknown>{
    return this.http.post(this.url+potionId, { withCredentials: true });
  }
}
