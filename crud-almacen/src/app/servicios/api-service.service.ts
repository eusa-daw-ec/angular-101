import { Injectable } from '@angular/core';
import { Articulo } from '../modelo/articulo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

const headerOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  listaArticulos: Articulo[] = [];

  articuloActual: Articulo = {
    id: '',
    descripcion: '',
    precio: 0,
  };

  // apiURL: string = 'http://localhost:3000/articulos';
  apiURL: string = 'https://curly-doodle-g4q99pvgq75vfvwj7-3000.app.github.dev/articulos';

  constructor(private http: HttpClient) {}

  public getListaArticulos() {
    return this.http.get<Articulo[]>(this.apiURL);
  }

  public deleteArticulo(id: string): Observable<string> {
    return this.http
      .delete(`${this.apiURL}/${id}`, { responseType: 'text' })
      .pipe(map(() => 'Borrado de registro realizado'));
  }

  public createArticulo(nuevoArticulo: Articulo): Observable<any> {
    return this.http.post(this.apiURL, nuevoArticulo);
  }

  public updateArticulo(id: string, articuloActualizado: any): Observable<any> {
    return this.http.put(`${this.apiURL}/${id}`, articuloActualizado);
  }

  public viewArticulo(id: string): Observable<any> {
    return this.http.get(`${this.apiURL}/${id}`);
  }
}
