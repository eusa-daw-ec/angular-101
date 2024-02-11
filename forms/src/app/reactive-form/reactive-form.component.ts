import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormBuilder,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  public submitted = false;
  public registerForm!: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this._fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        repeatPass: ['', [Validators.required, Validators.minLength(8)]],
      },
      {
        validator: this.mustMatch('password', 'repeatPass'),
      }
    );
  }

  mustMatch(controlName: string, matchingControlName: string) {
    return (control: AbstractControl): ValidationErrors | null => {
      const controlValue = control.get(controlName)?.value;
      const matchingControlValue = control.get(matchingControlName)?.value;

      if (controlValue !== matchingControlValue) {
        return { mustMatch: null };
      }
      return { mustMatch: true };
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
