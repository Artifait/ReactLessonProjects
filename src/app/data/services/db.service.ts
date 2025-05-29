import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Card } from '../interface/card.interface';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  http: HttpClient = inject(HttpClient);
  urlApi = 'https://fakestoreapiserver.reactbd.com/walmart';
  //constructor() {}
  getCardInfo() {
    return this.http.get<Card[]>(this.urlApi);
  }
}
