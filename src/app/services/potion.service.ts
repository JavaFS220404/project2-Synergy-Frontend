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
  apiUrl: string = 'https://wizard-world-api.herokuapp.com/Elixirs/';

  constructor(private http: HttpClient) { }

  getPotions(): Observable<any> {
    return this.http.get(this.apiUrl) as Observable<any>;
  }

  addFavorite(potionId: string): Observable<unknown>{
    return this.http.post(this.favUrl+potionId, { withCredentials: true });
  }

  getMyFavorites(): Observable<any> {
    return this.http.get(this.favUrl, { withCredentials: true }) as Observable<any>;
  }

  getFavorite(id: string): Observable<any> {
    return this.http.get(this.apiUrl + id) as Observable<Potion>;
  }
}
