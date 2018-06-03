import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { PeticionesService } from '../../services/peticiones.service';
import { Modulo } from '../../modelo/modulo';

@Component({
   selector: 'app-add-modulo',
   templateUrl: './add-modulo.component.html',
   styleUrls: ['./add-modulo.component.css'],
   providers: [PeticionesService]
})
export class AddModuloComponent implements OnInit {
   public modulo: Modulo;
   public program;
   public programId;

   constructor(
      private _peticionesService: PeticionesService,
      private router: Router,
      private route: ActivatedRoute,
   ) {
      this.modulo = new Modulo(null, '', '', '');//number, name, content, program
   }

   ngOnInit() {
      this.queryProgramId();
      this.queryProgram();
   }
   queryProgramId() {
      this.route.params.subscribe(params => {
         this.programId = params.id;
      });
   }
   queryProgram() {
      this._peticionesService.getProgram(this.programId).subscribe(response => {
         this.program = response;
         // console.log(this.program);
         this.queryModules();
      },
         error => {
            console.log(<any>error);
         });
   }
   queryModules() {
      this._peticionesService.getModulos(this.programId).subscribe(result => {
      var modules = result;
      // console.log(result)
      var keys = Object.keys(modules);
      this.modulo.number = keys.length + 1;
      });
   }
   onSubmit() {
      this.modulo.programs = this.programId;
      this._peticionesService.addModulo(this.modulo).subscribe(
         result => {
            var esperado = result;
            console.log(esperado);
            alert('El Módulo se creo correctamente');
            window.history.back();
         },
         error => {
            var errorMessage = <any>error;
            console.log(errorMessage);
            alert('Error al crear Módulo verifique los datos');
         }
      );
   }
   cancel() {
      window.history.back();
   }
}
