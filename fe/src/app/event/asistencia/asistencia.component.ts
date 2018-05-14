import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css'],
  providers: [PeticionesService]
})
export class AsistenciaComponent implements OnInit {
  public personId;
  public eventId;
  public modulos;

  public monto;
  public receipt;
  public select;
  public moduloSel;
  constructor(
    private _peticionesService: PeticionesService,
        private route: ActivatedRoute,
        private router: Router
  ) { }

  ngOnInit(){
    this.queryModulos();
  }
  guardar(){

  }
  queryModulos(){
    this.route.params.subscribe(params => {
      var arrayIds = params.id.split('-');
      this.personId = arrayIds[0];
      this.eventId = arrayIds[1];
      console.log(this.eventId);
      console.log('el id del evento ')
   });
    this._peticionesService.getEventModuls(this.eventId).subscribe(//consulta para obt todo modulos
      result => {
          this.modulos = result;
          console.log(this.modulos);
      },
      error => {
          var errorMessage = <any>error;
          console.log(errorMessage);
      });
  }
  cancel(){
    window.history.back();
  }
}
