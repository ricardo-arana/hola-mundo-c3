import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lista-input',
  templateUrl: './lista-input.component.html',
  styleUrls: ['./lista-input.component.css']
})
export class ListaInputComponent implements OnInit {
  @Output() value = new EventEmitter();
  valor: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  agregar() {

    if(this.valor) {
      this.value.emit(this.valor);
      this.valor = '';
    } else {
      alert('Ingrese un item valido');
    }
    
  }


}
