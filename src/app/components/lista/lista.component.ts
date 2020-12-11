import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  items: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  agregar(item: string) {
    this.items.push(item);
    console.log(this.items);
  }

  eliminar(index: number) {
    this.items.splice(index, 1);
  }

}
