import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Usuario } from '../../models/usuario/userModel'
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms'



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public usuario: Usuario;

  angForm: FormGroup;
  public isDirty: Boolean;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private fb: FormBuilder    
  ) {
    this.isDirty = true;
    this.createForm();
  }

  ngOnInit(): void {
    this._route.params.forEach( (params: Params) => {
      console.log("Este es el parametro", params['id'])
    })
    this.usuario = new Usuario(Date.now().toString(), '', '', '', '');

    
  }

  redirect = () => {
    this._router.navigate(['/post'])
  }

  sendUsuario(){
    if(this.angForm.status == 'INVALID') return alert("Por favor, revise los campos")
    console.log(this.angForm)
    console.log("El objeto usuario ", this.usuario)
  }

  createForm(){
    this.angForm = this.fb.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      edad: ["", Validators.required],
      email: ["", Validators.required]
    })
  }

  onChange(){
    if(this.angForm.status == 'INVALID') return this.isDirty = true;
    this.isDirty = false;
  }


}
