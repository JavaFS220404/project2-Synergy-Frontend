import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PotionService {

  url: string = 'http://localhost:8084/potion/';

  constructor(private http: HttpClient) { }

  getPotions(): Observable<any> {
    return this.http.get('https://wizard-world-api.herokuapp.com/Elixirs/') as Observable<any>;
  }

}
