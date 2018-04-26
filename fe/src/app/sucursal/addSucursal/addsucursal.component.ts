import { Component, OnInit } from '@angular/core';
import { Sucursal } from '../../modelo/sucursal';

@Component({
  selector: 'app-addsucursal',
  templateUrl: './addsucursal.component.html',
  styleUrls: ['./addsucursal.component.css']
})
export class AddSucursalComponent implements OnInit {

  public sucursal: Sucursal;

  constructor(
  ) {
    this.sucursal = new Sucursal('','','',null);
   }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.sucursal);
  }
}
