import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioApiService {

  private url = 'https://api.escuelajs.co/api/v1/users';

  constructor(private httpClient: HttpClient) { }

  public obtenerProducto(): Observable<any> {
    return this.httpClient.get<any>(this.url);
  }
}
