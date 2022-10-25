import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent implements OnInit {
  user = {
    usuario:'',
    pass:''
  }
  constructor() { }

  ngOnInit(): void {
  }

  login(){
    if(this.user.usuario !=""){
      console.log(this.acceso.login(this.user));
    }
  }
}
