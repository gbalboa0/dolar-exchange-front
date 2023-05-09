import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dolar } from '../dolar';

@Injectable({
  providedIn: 'root'
})
export class DolarService {

  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getCurrentDolarRates() : Observable<Dolar[]> {
    return this.http.get<Dolar[]>(`${this.apiUrl}/dolar`);
  }

  getHistoricDolarRates(dolarId: string) {
    return this.http.get(`${this.apiUrl}/dolar/history`, { params: { dolar_id: dolarId } });
  }

  fetchData() {
    return this.http.get(`${this.apiUrl}/dolar/fetch_data`);
  }
}
