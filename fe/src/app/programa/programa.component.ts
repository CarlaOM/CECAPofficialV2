import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../services/peticiones.service';
import { Identity } from "../services/global";
//import { Identity } from '../services/global';

@Component({
  selector: 'app-programa',
  templateUrl: './programa.component.html',
  styleUrls: ['./programa.component.css'],
  providers: [ PeticionesService]
})
export class ProgramaComponent implements OnInit {
    public programs;
    public role;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    this.queryRol();
    this._peticionesService.getPrograms().subscribe(
      result => {
         this.programs = result;
         console.log(result)
      },
      error => {
         console.log(<any>error);
      });
  }
  volver(){
    this.router.navigate(['home/events']);    
  }
  send(_id:string) {
    this.router.navigate(['home/modulos', _id]);
  }
  editProgram(_id:string){
    this.router.navigate(['/home/program/edit', _id]);
  }
  addProgram(){
    this.router.navigate(['/home/program/add']);
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