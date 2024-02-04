import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tablasnro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tablasnro.component.html',
  styleUrl: './tablasnro.component.css'
})
export class TablasnroComponent {
  nro=0;
  tabla='';

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.nro = parseInt(parametros.get("nro")!);
      this.tabla = '';
      for (let x = 1; x <= 10; x++) {
        let t = x * this.nro;
        this.tabla += t + '-';
      }
    })
  }
}
