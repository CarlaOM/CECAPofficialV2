import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../services/peticiones.service';
// import { facilitador } from '../modelo/facilitador';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-facilitador',
  templateUrl: './facilitador.component.html',
  styleUrls: ['./facilitador.component.css'],
  providers: [ PeticionesService ]
})
export class facilitadorComponent implements OnInit {
  public facilitadores;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    this._peticionesService.getFacilitadores().subscribe(
      result => {
         this.facilitadores = result;
         console.log(this.facilitadores); 
      },
    error => {
      console.log(<any>error)
    });
 }
 
  addfacilitador(){

    this.router.navigate(['/home/facilitador/add']);

  }
  editfacilitador(_id){
    console.log(_id);
    this.router.navigate(['/home/facilitador/edit',_id]);
    // console.log("router.navigate");
  }
  infofacilitador(_id:string){
    // console.log(_id);
    this.router.navigate(['/home/facilitador/info',_id]);
  }
  // deletefacilitador(_id:string){
  //   this._peticionesService.deleteUser().subscribe(
  //     result => {
  //        console.log(result); 
  //     },
  //   error => {
  //     console.log(<any>error)
  //   });

  // }
}