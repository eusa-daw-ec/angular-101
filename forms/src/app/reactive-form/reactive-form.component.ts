import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  ValidatorFn,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  submitted = false;

  registerForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      repeatPass: new FormControl('', Validators.required),
    },
    {validators: this.MustMatch('password', 'repeatPass')}
  );

  MustMatch(controlName: string, matchingControlName: string) {
    // La función devuelta es el validador personalizado que será utilizado por el formulario reactivo
    return (formGroup: FormGroup) => {
      // Obtener los controles de los campos que se están comparando
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      // Verificar si ya existe un error 'mustMatch' en matchingControl
      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        // Devolver si otro validador ya ha encontrado un error en matchingControl
        return;
      }

      // Establecer un error en matchingControl si la validación falla
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        // Eliminar el error si la validación es exitosa
        matchingControl.setErrors(null);
      }
    };
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // No enviar si el formulario no está correctamente validado
    if (this.registerForm.invalid) {
      return;
    }

    // Qué hacer si la validación es correcta
    alert(
      'SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4)
    );
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
