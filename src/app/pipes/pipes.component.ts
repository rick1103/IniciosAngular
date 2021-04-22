import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  titulo: string = 'Hola soy un titulo';
  dinero: number = 2400;
  ganancias: number = 0.54;
  fechaNacimiento: Date = new Date('03-11-1995');
  textoLargo: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quam sed consequuntur, corrupti maiores cum est esse assumenda dicta. Eveniet numquam blanditiis iure odit unde? Minus perferendis cupiditate laudantium. Officia.'

  constructor() { }

  ngOnInit() {
  }

}
