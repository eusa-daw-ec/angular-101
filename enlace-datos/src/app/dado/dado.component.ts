import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, OnInit} from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})
export class DadoComponent implements OnInit {

  valor: string = (Math.floor(Math.random()*6)+1).toString()

  @Output () propagar = new EventEmitter<string>();

  tirar ( ){

    
  }

  ngOnInit() {

    this.propagar.emit(this.valor)

  }
 

}
