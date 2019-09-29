import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.scss']
})
export class CorreoComponent implements OnInit {

  correo: any;

  constructor() {
    this.correo = {
      titulo: "Titulo prueba",
      emisor: "Juanito@pacome.com",
      destinatario: "Paco@pacome.com",
      cuerpo:"Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje Cuerpo del mensaje"
      
    }
  }

  ngOnInit() {
  }

}
