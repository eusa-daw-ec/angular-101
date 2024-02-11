import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { CursosComponent } from './cursos/cursos.component';
import { DetalleCursoComponent } from './detalle-curso/detalle-curso.component';

export const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'acercade', component: AcercadeComponent },
    { path: 'cursos', component: CursosComponent },
    { path: 'cursos/:id', component: DetalleCursoComponent },
];
