import { Component, OnInit } from '@angular/core';
import { SucursalService } from '../services/sucursal.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Identity } from "../services/global";
import { PeticionesService } from "../services/peticiones.service";

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css'],
  providers: [ PeticionesService]

})
export class SucursalComponent implements OnInit {

  public role;
  public sucursales;
  constructor(
    private _peticionesService: PeticionesService,
    private _peticionSucursalService: SucursalService,
     private route: ActivatedRoute,
     private router: Router
  ) { }

  ngOnInit() {
    this.queryRol();
    this.querySucursales();
  }
  sendEdit(){
    
  }
  querySucursales(){
      this._peticionSucursalService.getSucursales().subscribe(
        result => {
          this.sucursales = result;
         console.log(this.sucursales);
        },
        error => {
          var errorMessage = <any>error;
          console.log(errorMessage);
          alert('Error ');
        }
      );
  }
  verSucursal(id:String){
    //console.log("facilitadorComponent");
    this.router.navigate(['/home/sucursal/detalleCaja/', id]);
    }


    queryRol(){
      //console.log(Identity.rol)
    this._peticionesService.getRole(Identity.rol).subscribe(
        result => {
          this.role = result;
        },
        error=>{
          var errorMessage = <any>error;
          console.log(errorMessage);
        }
    );
   }
}
