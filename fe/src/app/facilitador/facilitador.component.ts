import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../services/peticiones.service';
import { User } from '../modelo/user';
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
    this._peticionesService.getFacilitador().subscribe(
      result => {
         this.facilitadores = result;
         console.log(this.facilitadores); 
      },
    error => {
      console.log(<any>error)
    });
 }
  editfacilitador(_active:boolean){
  //console.log("facilitadorComponent");
  this.router.navigate(['/home/facilitador/edit',_active]);
  //console.log("router.navigate");
  }
  addfacilitador(){

    this.router.navigate(['/home/facilitador/add']);

  }
  infofacilitador(_id:string){
    // console.log(_id);
    this.router.navigate(['/home/facilitador',_id]);
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