import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BarraSuperiorComponent, ListaProductosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mystore';
}
