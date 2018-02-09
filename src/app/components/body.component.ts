import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html'
})
export class BodyComponent {
  frase: any = {
    titulo: 'Frase del dia',
    mensaje: 'Un gran poder requiere una gran responsablidad',
    autor: 'Ben Parker'
  };
  mostrar = false;
  personajes: string[] = ['Spiderman', 'Venom', 'Dr.Octopus'];
  villanos: any[] = [
    {
      nombre: 'Spiderman',
      descripcion: 'Hero de New York'
    },
    {
      nombre: 'Venom',
      descripcion: 'Nemesis de Spiderman'
    },
    {
      nombre: 'Dr.Octopus',
      descripcion: 'Enemigo de Spiderman'
    }];
}
