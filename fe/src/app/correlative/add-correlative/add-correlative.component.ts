import { Component, OnInit } from '@angular/core';
import { Correlativo } from '../../modelo/correlativo';
import {PeticionesService } from '../../services/peticiones.service';
import { Router,ActivatedRoute } from "@angular/router";
import { Receipt } from '../../modelo/receipts';



@Component({
  selector: 'app-add-correlative',
  templateUrl: './add-correlative.component.html',
  styleUrls: ['./add-correlative.component.css'],
  providers:[PeticionesService]
})
export class AddCorrelativeComponent implements OnInit {
 public correlativo;
 public receipt;
  constructor(
    private _peticionesService:PeticionesService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.receipt = new Receipt("1233", 1000, "recibo de caja");
    this.correlativo = new Correlativo(null,null);
   }
  submitted = false;
  ngOnInit() {
  }
  guardar(){
      this.correlativo.receipts = this.receipt

      console.log(this.correlativo);
      this._peticionesService.addCorrelative(this.correlativo).subscribe(response=>{
      //this.router.navigate(['/home/ejecutivo/']); 
      },error=>{
          var errorMessage=<any>error;
          console.log(errorMessage);
      })

      this.router.navigate(['/home/correlative'])
  }
  cancel(){
    this.router.navigate(['home/correlative']);
  }
}
