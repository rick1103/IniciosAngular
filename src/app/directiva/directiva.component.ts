import { Component, OnInit } from '@angular/core';

interface Producto{
  nombre: string;
  stock: number;
  fabricante: string;
  fechaVence: Date;
  esImportante: boolean;
  textoGrande: boolean;
}


@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.scss']
})
export class DirectivaComponent implements OnInit {
  cargando: boolean = true;
  nombres: Array<string> =["Maria","Ana","Juan","Pedro"];
  pestana: string = '';
  productos: Array<Producto> = [
    {
      nombre: 'Arroz',
      stock: 15,
      fabricante: 'Distribuidor Industrial',
      fechaVence: new Date('04/20/2021'),
      esImportante: false,
      textoGrande: true
    },
    {
      nombre: 'Maiz',
      stock: 25,
      fabricante: 'Distribuidor Industrial',
      fechaVence: new Date('04/20/2022'),
      esImportante: true,
      textoGrande: false
    },
    {
      nombre: 'Coca',
      stock: 200,
      fabricante: 'Coca cola',
      fechaVence: new Date('01/20/2024'),
      esImportante: false,
      textoGrande: true
    }
  ]
  mostrarCuadrado: boolean = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.cargando = false;

    },5000);
  }

  alternar(){
    this.cargando = !this.cargando;
  }

  cambiarPestana(pestana:string){
    this.pestana = pestana;
  }

  alternarFondo(){
    this.mostrarCuadrado = !this.mostrarCuadrado;
  }


}
