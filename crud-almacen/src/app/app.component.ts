import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaArticulosComponent } from './componentes/lista-articulos/lista-articulos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaArticulosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud-almacen';
}
