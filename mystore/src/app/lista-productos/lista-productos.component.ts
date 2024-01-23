import { Component } from '@angular/core';
import { datosProductos } from '../datosProductos'
import { CommonModule } from '@angular/common';
import { AlertaProductoComponent } from '../alerta-producto/alerta-producto.component';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [CommonModule, AlertaProductoComponent],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {

  productos = datosProductos;

  compartir() {
    window.alert("El producto se ha compartido!!")
  }

  onAviso() {
    window.alert('Te avisaremos cuando el producto salga a la venta...');
  }

}
