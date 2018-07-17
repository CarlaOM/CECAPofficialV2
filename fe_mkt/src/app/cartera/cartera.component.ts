import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../services/peticiones.service';
import { Person } from '../modelo/person';
import { Identity, Roles } from "../services/global";
// import { forEach } from '@angular/router/src/utils/collection';
// import { Identity } from "../services/global";
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-cartera',
  templateUrl: './cartera.component.html',
  styleUrls: ['./cartera.component.css'],
  providers: [ PeticionesService]
  
})
export class CarteraComponent implements OnInit {

  public carteras;
  public role;
  ////////////////////////////////////////////////////
  public page;
  public total;
  public totalPag;
  public mostrar = [];
  ////////////////////////////////////////////////////

  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private _peticionesService: PeticionesService
  ) { }
  
  ngOnInit() {

    this._peticionesService.getCarteras().subscribe(response=>{
      this.carteras=response;
      this.mostrarCartera();
    });
    this.queryRol();
  }
  dis(){
    this.page = this.page-1;
    var inicio = (8*(this.page-1));
    var final = (8*(this.page-1))+8;
    this.mostrar = [];
    for(var a = inicio  ; a < final ; a++ ){
      this.mostrar.push(this.carteras[a]);
  }
  }
  aum(){
    this.page = this.page+1;
    // console.log(this.page)
    var inicio = (8*(this.page-1));
    // console.log(inicio)
    var final = (8*(this.page-1))+8;
    if(final > this.total){
      final = this.total;
    }
    // console.log(final)
    this.mostrar = [];
    for(var a = inicio  ; a < final ; a++ ){
        this.mostrar.push(this.carteras[a]);
    }
  }
  mostrarCartera(){
    this.page = 1;
    this.total = this.carteras.length;
    if(this.total == 0){
      this.totalPag = 1;
    } else{
    this.totalPag = Math.ceil(this.total/8);
    }
    this.mostrar = []
    // console.log(this.totalPag)
    if(this.totalPag > 1){
      for(var a = 0 ; a < 8 ; a++){
      this.mostrar.push(this.carteras[a]) ;}
    } else{
      this.mostrar = this.carteras;
    }
    
  }
  addCartera(){
    this.router.navigate(['/home/cartera/add']);
  }
  send(_id:string){
    // console.log(_id);
    this.router.navigate(['/home/cartera',_id]);
  }
  editCartera(_name:string){
    // console.log("carteracomponent");
    this.router.navigate(['/home/cartera/edit',_name]);
    // console.log("router.navigate");
  }

  queryRol(){
    // console.log(Identity.rol)
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
