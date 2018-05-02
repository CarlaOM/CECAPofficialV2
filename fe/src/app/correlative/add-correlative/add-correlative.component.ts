import { Component, OnInit } from '@angular/core';
import { Correlativo } from '../../modelo/correlativo';

@Component({
  selector: 'app-add-correlative',
  templateUrl: './add-correlative.component.html',
  styleUrls: ['./add-correlative.component.css']
})
export class AddCorrelativeComponent implements OnInit {
 public correlativo: Correlativo;
  constructor() {
    this.correlativo = new Correlativo(null,null);
   }

  ngOnInit() {
  }
 guardar(){
  console.log(this.correlativo);
 }
}
