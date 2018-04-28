import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { ActivatedRoute,Router } from "@angular/router";
import { User} from '../../modelo/user';

@Component({
  selector: 'app-info-ejecutivo',
  templateUrl: './info-ejecutivo.component.html',
  styleUrls: ['./info-ejecutivo.component.css'],
  providers: [ PeticionesService ]
  
})
export class InfoEjecutivoComponent implements OnInit {

  public ejecutivo;
  public ejecutivoId;

  constructor(

    private _peticionesService: PeticionesService,
    private route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.queryEjecutivoId();
    this.findEjecutivo();
  }
  queryEjecutivoId(){
    this.route.params.subscribe(params => {
    this.ejecutivoId=params.id;
    console.log(this.ejecutivo);
 });
}

  findEjecutivo(){
    this._peticionesService.getOneUser(this.ejecutivoId).subscribe(
       result =>{
         this.ejecutivo=result;
         console.log(this.ejecutivo);
         
       },
       error =>{
         console.log(<any>error);
       });
 }

}
