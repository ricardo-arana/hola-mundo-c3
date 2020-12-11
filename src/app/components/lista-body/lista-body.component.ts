import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista-body',
  templateUrl: './lista-body.component.html',
  styleUrls: ['./lista-body.component.css']
})
export class ListaBodyComponent implements OnInit {
  @Input() items: string[] = [];
  @Output() salida = new EventEmitter();
   constructor() { }

  ngOnInit(): void {
  }

  eliminar(index: number) {
    console.log(index);
    this.salida.emit(index);
  }

}
