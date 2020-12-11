import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  nombre!: string;
  constructor() { }

  ngOnInit(): void {
  }

  guardar(forma: any) {
    console.log(forma);
  }

}
