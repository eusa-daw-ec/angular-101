import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TablasnroComponent } from './tablasnro/tablasnro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TablasnroComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tablas-multi';
}
