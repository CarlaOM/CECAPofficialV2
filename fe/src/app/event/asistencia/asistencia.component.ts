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
  public userId;
  public modulos;

  constructor(
    private _peticionesService: PeticionesService,
        private route: ActivatedRoute,
        private router: Router
  ) { }

  ngOnInit(){

  }
  queryModulos(){
    this.route.params.subscribe(params => {
      this.userId = params.id
      console.log(this.userId);
      console.log('el id de la persona kokmjkmlk')
   });
    this._peticionesService.getEventModuls(this.userId).subscribe(
      result => {
          this.modulos = result;
          //console.log(this.eventos);
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
