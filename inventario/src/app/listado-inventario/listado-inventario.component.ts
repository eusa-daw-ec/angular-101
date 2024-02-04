import { Component } from '@angular/core';
import { Articulo } from '../modelo/articulo';
import { bdArticulos } from '../modelo/bd-articulos';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado-inventario',
  standalone: true,
  imports: [],
  templateUrl: './listado-inventario.component.html',
  styleUrl: './listado-inventario.component.css',
})
export class ListadoInventarioComponent {

  articulo: Articulo = {
    codigo: 0,
    descripcion: "",
    precio: 0,
    cantidad: 0,
    unidad: "",
  }

  articulos: Articulo[] = bdArticulos;
}
