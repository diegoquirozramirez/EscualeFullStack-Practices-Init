import { Component } from '@angular/core';
import { Usuario } from './models/usuario/userModel'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Escuela FullStack';
  nombres = 'Diego Antonio';
  apellidos = 'Quiroz Ramirez';
  edad = 26;

  public nombreMayor: String;
  public apellidoMayor: String;
  public edadMayor: Number;

  public usuario: Usuario;

  public exists: Boolean;
  public usuarios = [];
  public color: String;
  public color_type: String;


  constructor(){
    this.color_type = 'red';
    this.color = 'blue';
    this.exists = true;
    this.usuario = new Usuario(Date.now().toString(),'Fernando', 'Torres', 26, 'torres@gmail.com');
    this.usuarios.push(
      new Usuario(Date.now().toString(),'Josefina', 'Manrique', 19, 'josefa@gmail.com'),
      new Usuario(Date.now().toString(),'Mario', 'Tacunan', 28, 'tacu@gmail.com'),
      new Usuario(Date.now().toString(), 'Frank', 'Quiroz', 20, 'frano@gmail.com')
    )
    
  }


  alerta(){
    alert('Hola mundo')
  }


  mostrar(){
    setTimeout( () => {
      this.nombreMayor = 'Maria';
      this.apellidoMayor = 'Quiroz';
      this.edadMayor = 46
    }, 2000 )
  }

  condicional(){
    this.exists = false
    setTimeout( () => {
      this.exists = true
    }, 3000 )
  }


}
