import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-caja',
  templateUrl: './detalle-caja.component.html',
  styleUrls: ['./detalle-caja.component.css']
})
export class DetalleCajaComponent implements OnInit {
  public collection ;
  constructor() { 
    this.collection = ["RRHH", "Medio Ambiente", "derecho"];
  }

  ngOnInit() {
  }

}
