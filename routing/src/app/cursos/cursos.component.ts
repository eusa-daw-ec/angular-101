import { Component, inject } from '@angular/core';
import { CursosDbService, Curso } from '../cursos-db.service';
import { RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css',
})
export class CursosComponent {
  listaCursos: Curso[] = [];

  // cursosDB = inject(CursosDbService); Otra forma de inyectar servicios

  constructor(private cursosDB: CursosDbService) {
    this.listaCursos = this.cursosDB.getListaCursos();
  }
}
