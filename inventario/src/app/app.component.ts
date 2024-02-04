import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoInventarioComponent } from './listado-inventario/listado-inventario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListadoInventarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
