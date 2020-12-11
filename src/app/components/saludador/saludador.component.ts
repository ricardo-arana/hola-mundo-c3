import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-saludador',
  templateUrl: './saludador.component.html',
  styleUrls: ['./saludador.component.css']
})
export class SaludadorComponent implements OnInit {

  nombre: string = '';
  @ViewChild('nombreInput')
  nombreInput!: ElementRef;

  constructor() {

  }
  ngOnInit(): void {
  }

  saludar(nombre: string) {
    this.nombre = nombre;
    this.nombreInput.nativeElement.value = '';
  }

}
