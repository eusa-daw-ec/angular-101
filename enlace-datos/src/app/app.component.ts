import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DadoComponent } from './dado/dado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  valor1: number = 0;
  valor2: number = 0;
  valor3: number = 0;
  

  asignar1(t:string) {
    this.valor1 = parseInt(t)
  }

  asignar2(t:string) {
    this.valor2 = parseInt(t)
  }

  asignar3(t:string) {
    this.valor3 = parseInt(t)
  }
  
  
}
