import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss']
})
export class TitulosComponent implements OnInit {

  nombre:string = 'Ricardo';
  apellido:string = 'Garcia';
  alumno: any = {
    nombre: 'Jose',
    apellido: 'Santos',
    edad: 21
  }

  imagen: string = 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'
  
  inputNuevo:string = "Hola soy un imput"

  correo:string = ''
  password:string = ''

  constructor() { }

  ngOnInit() {
  }

  ingresar(evento){
    if(evento.key == "Enter")
    {
      console.log("Ingresando al Sistema")
    }
  }

  llamarAlert(){
    alert('Ha hecho doble Click')
  }

  escribirModelo(){
    console.log(this.password)
  }

  escribirCorreo(){
    this.password = this.correo
    console.log(this.correo)
    console.log(this.password)
  }

  escribir(valor:string){
    console.log(valor)
  }


  colorearFondo(evento){
    evento.srcElement.style.background = "red"
    evento.srcElement.style.width = "200px"
  }

  cambiarTam(evento){
    evento.srcElement.style.width = "500px"
    evento.srcElement.style.heigth = "200px"
    evento.srcElement.style.border = "1px solid red"
  }

  incrementarTam(evento){
    evento.srcElement.style.width = "800px"
    evento.srcElement.style.heigth = "400px"
    evento.srcElement.style.border = "1px solid green"
  }

}
