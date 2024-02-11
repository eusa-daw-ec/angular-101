import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Curso, CursosDbService } from '../cursos-db.service';

@Component({
  selector: 'app-detalle-curso',
  standalone: true,
  imports: [],
  templateUrl: './detalle-curso.component.html',
  styleUrl: './detalle-curso.component.css',
})
export class DetalleCursoComponent implements OnInit {
  cursoId?: number;
  curso?: Curso;

  constructor(
    private rutaActiva: ActivatedRoute,
    private cursosDB: CursosDbService
  ) {}

  ngOnInit(): void {
    this.rutaActiva.params.subscribe((params: Params) => {
      this.cursoId = parseInt(params['id']);
      this.curso = this.cursosDB.getCursoById(this.cursoId); // este servicio no responde con un observable
    });
  }
}
