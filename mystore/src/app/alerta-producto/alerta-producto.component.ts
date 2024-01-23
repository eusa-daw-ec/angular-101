import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../productosInterface';


@Component({
  selector: 'app-alerta-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alerta-producto.component.html',
  styleUrl: './alerta-producto.component.css'
})
export class AlertaProductoComponent {

  @Input() producto!: Producto;
  @Output() aviso = new EventEmitter();

}
