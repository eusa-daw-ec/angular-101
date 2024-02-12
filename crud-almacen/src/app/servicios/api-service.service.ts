import { Injectable } from '@angular/core';
import { Articulo } from '../modelo/articulo';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headerOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  listaArticulos: Articulo[] = [];

  articuloActual: Articulo = {
    codigo: '',
    descripcion: '',
    precio: 0,
  }

  apiURL: string = 'http://localhost:3000/articulos';

  constructor(private http: HttpClient) { }

  getListaArticulos() {

    return this.http.get<Articulo[]>(this.apiURL, headerOptions).subscribe(
      (data: Articulo[]) => {
        this.listaArticulos = data;
        console.table(this.listaArticulos);
      });

  }
}
