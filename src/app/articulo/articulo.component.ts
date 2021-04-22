import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from '../models/articulo';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {

  articulos: Array<Articulo> = new Array<Articulo>();

  constructor(private ruta: Router) { }

  ngOnInit() {
    this.articulos.push(
    { 
      nombre: 'Televisor de 24 pulgadas', 
      descripcion: 'Marca dell 4 anos de garantia', 
      precio: 1500, 
      stock:45, 
      precioMayorista: 1400 
    },
    { 
      nombre: 'Laptop 15 pulgadas', 
      descripcion: 'Laptop nueva con 8 GB de ram', 
      precio: 15000, 
      stock:24, 
      precioMayorista: 14000 
    },
    { 
      nombre: 'Monitor', 
      descripcion: 'Monitor curvo con pantalla full hd', 
      precio: 8000, 
      stock:10, 
      precioMayorista: 7500 
    }
    )
  }

  pasarArticulo(articuloRecibido: Articulo){
    this.ruta.navigate(['articuloDetalle',{articulo: JSON.stringify(articuloRecibido)}])
  }

}
