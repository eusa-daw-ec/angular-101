import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface IRegisterForm {
  name: string;
  email: string;
  // password: string;
  // repeatPass: string;
}

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {

  register: IRegisterForm = {
    name: "",
    email: "",
    // password: "",
    // repeatPass: ""
  }

  submit(): void {
    console.log("Datos de inicio de sesión");
    console.log(this.register.name);
    console.log(this.register.email);
    // console.log(this.register.password);
    // console.log(this.register.repeatPass);
  }


}
