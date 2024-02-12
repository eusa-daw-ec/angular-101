import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../modelo/articulo';
import { ApiServiceService } from '../../servicios/api-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-articulos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-articulos.component.html',
  styleUrl: './lista-articulos.component.css',
})
export class ListaArticulosComponent implements OnInit {

  public listaArticulos: Articulo[] = []
  public articulo: Articulo = {
    codigo: '',
    descripcion: '',
    precio: 0,
  };

  constructor(private apiService: ApiServiceService) {}

  ngOnInit(): void {
    this.apiService.getListaArticulos();
  }
}


