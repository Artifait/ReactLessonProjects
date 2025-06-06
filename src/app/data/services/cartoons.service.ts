import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cartoon } from '../interfaces/cartoon.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartoonsService {
  private http: HttpClient = inject(HttpClient);
  private apiUrl = 'https://api.sampleapis.com/cartoons/cartoons2D';

  getCartoons(): Observable<Cartoon[]> {
    return this.http.get<Cartoon[]>(this.apiUrl);
  }
}
