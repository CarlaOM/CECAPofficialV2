import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.css'],
  providers: [ PeticionesService ]
})
export class ModuloComponent implements OnInit {
  public programId;
  public program;
  public modulos;

  constructor(
      private route: ActivatedRoute,
      private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    this.queryProgram();
    this.findProgram();
    this.findModulo();
  }

  //ngAfterViewInit() {
  //  this.query();
  //}

  //receiveMessage() {
  //  this.query();
  //}
 
  queryProgram() {
    this.route.params.subscribe(params => {
       this.programId = params.id
    });
  }

  findProgram(){
    this._peticionesService.getProgram(this.programId).subscribe(
       result =>{
         this.program=result; 
         console.log(result)     
       },
       error =>{
         console.log(<any>error);
       })
   }
  
   findModulo(){
     this._peticionesService.getModulos().subscribe(
       result =>{
        this.modulos=result;
        console.log(result)
       },
       error =>{
         console.log(<any>error)
       })
   }
}