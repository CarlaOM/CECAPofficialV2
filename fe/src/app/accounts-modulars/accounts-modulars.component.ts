import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-accounts-modulars',
  templateUrl: './accounts-modulars.component.html',
  styleUrls: ['./accounts-modulars.component.css'],
  providers: [PeticionesService]
})
export class AccountsModularsComponent implements OnInit {
  public eventId;
  public event;
  public modules;
  public account;//object(assist,egreso,ingreso,particular,professional,student)

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() { 
    //this.queryModulos();
    this.queryModulars();
  }
  queryModulars(){
    this.route.params.subscribe(params => {
      this.eventId = params.id;
      // //console.log(this.eventId)
    });
    this._peticionesService.getModulars(this.eventId).subscribe(
      result => {
        this.modules = result;
        this.modules.sort((left,right)=>{
          if(left.name<right.name)return -1;
          if(left.name>right.name)return 1;
          return 0;
        });
        // for( let i of this.modules ){
        //     if(i.modules == null){
        //         this.modules.pop();
        //     }
        // }
         //console.log('aqui los modules Objedts');
         //console.log(this.modules);
      },
      error=>{
        var errorMessage = <any>error;
         //console.log(errorMessage);
      }
    );
  }
  queryEvent() {
    this._peticionesService.getEvent(this.eventId).subscribe(
       result => {
          this.event = result;
          // //console.log(this.event);
       },
       error => {
          //console.log(<any>error);
       });
  }
  filterModular(modular_id){
    //console.log(modular_id);
    //returned object 
    this._peticionesService.getAcconutsModulars(modular_id+'-'+this.eventId).subscribe(
      res =>{
          this.account = res;
          // console.log(this.account);
      },
      error =>{
        console.error(<any>error());
        
    }); 
  }
  cancelar(){
    window.history.back();
  }
}
