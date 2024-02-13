import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../modelo/articulo';
import { ApiServiceService } from '../../servicios/api-service.service';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-lista-articulos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './lista-articulos.component.html',
  styleUrl: './lista-articulos.component.css',
})
export class ListaArticulosComponent implements OnInit {
  formulario!: FormGroup;

  public listaArticulos: Articulo[] = [];

  public articuloActual: Articulo = {
    id: '',
    descripcion: '',
    precio: 0,
  };

  private codSel: string | null = '';

  public modoEdicion: boolean = false;

  onInputChange(valor: string | null) {
    this.codSel = valor || null;
  }

  constructor(private apiService: ApiServiceService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.listarArticulos();
    this.inicializaFormulario();
  }

  inicializaFormulario() {
    this.formulario = this.fb.group({
      id: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
    });
  }

  enviarFormulario() {
    // Acceder a los valores del formulario
    const articuloGuardado = this.formulario.value;
    console.log('Artículo guardado:', articuloGuardado);
  }

  listarArticulos() {
    this.apiService.getListaArticulos().subscribe((data) => {
      this.listaArticulos = data.sort(
        (a, b) => parseInt(a.id) - parseInt(b.id)
      );
    });
  }

  borrarArticulo(codSel: string) {
    return this.apiService.deleteArticulo(codSel).subscribe(() => {
      console.log('Borrado realizado');
      this.listarArticulos();
    });
  }

  crearArticulo() {
    
    // Verifica si el formulario es válido antes de continuar
    if (this.formulario.valid) {
      const nuevoArticulo = this.formulario.value;

      this.apiService.createArticulo(nuevoArticulo).subscribe(() => {
        console.log('Artículo creado');
        this.listarArticulos();
        this.inicializaFormulario();
      });
    } else {
      // El formulario no es válido, puedes mostrar mensajes de error o realizar otras acciones
      alert('El formulario no es válido. Por favor, completa todos los campos.');
    }
  }

  editarArticulo(codSel: string) {

    if (this.formulario.valid) {
    const articuloActualizado = this.formulario.value

    this.apiService
      .updateArticulo(codSel, articuloActualizado)
      .subscribe(() => {
        console.log('Artículo editado');
        this.listarArticulos();
        this.inicializaFormulario();
        this.modoEdicion = false;
      });
    } else {
      alert('El formulario no es válido. Por favor, completa todos los campos.')
    }
  }

  verArticulo(codSel: string) {
    return this.apiService.viewArticulo(codSel).subscribe((articulo) => {
      this.articuloActual = articulo;
      this.formulario.patchValue(this.articuloActual);
      this.modoEdicion = true;
    });
  }
}
