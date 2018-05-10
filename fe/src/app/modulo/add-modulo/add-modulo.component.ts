import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";
import {PeticionesService } from '../../services/peticiones.service';
import { Modulo } from '../../modelo/modulo';

@Component({
  selector: 'app-add-modulo',
  templateUrl: './add-modulo.component.html',
  styleUrls: ['./add-modulo.component.css'],
  providers: [ PeticionesService]
})
export class AddModuloComponent implements OnInit {
  public modulo: Modulo; 
  public programs; 

  constructor(
    private _peticionesService:PeticionesService,
    private router: Router,
    private route: ActivatedRoute,
  ){
    this.modulo = new Modulo(null, '', '', '');//number, name, content, program
   }

  ngOnInit() {
    this.queryPrograms();
  }
  queryPrograms(){
    this._peticionesService.getPrograms().subscribe(response => {
        this.programs = response;
        //console.log(this.programs);
       },
       error=>{
        console.log(<any>error);
       });
  }
  onSubmit() {
    console.log(this.modulo);
    this._peticionesService.addModulo(this.modulo).subscribe(
      result => {
        var esperado = result;
        console.log(esperado);
        alert('El Modulo se Creo correctamente');
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        alert('Error al Crear Modulo verifique los datos');
      }
    );
  }
  cancel() {
    this.router.navigate(['home/modulo']);
  }
}