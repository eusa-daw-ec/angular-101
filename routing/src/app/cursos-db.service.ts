import { Injectable } from '@angular/core';

export interface Curso { id: number; nombre: string; detalle: string, horas: number }

@Injectable({
  providedIn: 'root'
})
export class CursosDbService {

  protected listaCursos: Curso[] = [
    {
      id: 1,
      nombre: 'JavaScript',
      detalle: 'Curso de JS Vanilla de cero a experto',
      horas: 150,
    },
    {
      id: 2,
      nombre: 'Angular',
      detalle: 'Curso de Angular 17. Introducción y casos prácticos',
      horas: 200,
    },
    {
      id: 3,
      nombre: 'CSS',
      detalle: 'FrameWorks principales en CSS',
      horas: 100,
    },
    {
      id: 4,
      nombre: 'HTML5',
      detalle: 'Cambios en la última versión. Nuevas funcionalidades',
      horas: 120,
    },
  ];

  getListaCursos(): Curso[] {
    return this.listaCursos;
  }

  getCursoById(id: number): Curso | undefined {
    console.log(id);
    return this.listaCursos.find((curso) => curso.id === id);
  }
}
