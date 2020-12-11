import { Component } from '@angular/core';


@Component({
    selector: 'app-hola-mundo',
    templateUrl: './hola-mundo.component.html' 
})
export class HolaMundoComponent {
    title: string = 'Hola Mundo!';
    buttonText = 'Saludar a everis';

    cambiarTitulo() {
        this.title = this.title === 'Hola Mundo!' ? 'Hola Everis!' : 'Hola Mundo!';
        this.buttonText = this.buttonText === 'Saludar a everis' ? 'Saludar al mundo!' : 'Saludar a everis';
    }
}