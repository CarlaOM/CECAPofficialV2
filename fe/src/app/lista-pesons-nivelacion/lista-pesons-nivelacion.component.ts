import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
//import { UserService } from '../services/user.service';
import { Identity,Roles } from '../services/global';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-lista-pesons-nivelacion',
  templateUrl: './lista-pesons-nivelacion.component.html',
  styleUrls: ['./lista-pesons-nivelacion.component.css'],
  providers: [ PeticionesService]
  
})
export class ListaPesonsNivelacionComponent implements OnInit {

  public lista;
  public listaPersonas=[];
  public eventId;
  constructor(
    private _peticionesService: PeticionesService,
    private route: ActivatedRoute,
    private router: Router
 ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.eventId = params.id;
      this.listaNivelacion();
    })
  }

  listaNivelacion(){
     let programEvent={}as ProgramEvent;
        programEvent.programId=null;
        programEvent.eventId=this.eventId;
        this._peticionesService.listPersonNivelacionForCalls(programEvent).subscribe(res=>{
            this.lista=res;
            this.listaPersonas=this.lista;
            // console.log(this.listaPersonas);
        })
  }

}

export interface ProgramEvent{
  programId:string,
  eventId:string,
}