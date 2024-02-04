import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateFormComponent } from './template-form/template-form.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemplateFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form-plantilla';
}
