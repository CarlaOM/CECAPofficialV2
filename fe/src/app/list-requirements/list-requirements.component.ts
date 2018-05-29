import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../services/peticiones.service';
import { Person } from '../modelo/person';

@Component({
  selector: 'app-list-requirements',
  templateUrl: './list-requirements.component.html',
  styleUrls: ['./list-requirements.component.css'],
  providers: [PeticionesService]
})
export class ListRequirementsComponent implements OnInit {
  public eventId;
  public event;
  public inscriptions = [];
  public states: Array<any> = [];
  public idProgram;
  public res;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    this.res = new Person("","",null,null,null,"","",null,"");
    this.findEventId();
    this.findProgramId();
    // this.query();
  }
  findEventId() {
    this.route.params.subscribe(params => {
       this.eventId = params.id;
       console.log(this.eventId)
    });
  }
  findProgramId(){
    this._peticionesService.getEvent(this.eventId).subscribe(
      response => {
        var resultado = response;
        this.idProgram = resultado.programs;
        this.query();
        console.log(resultado);
      }
    )
  }
  query() {
    this._peticionesService.postRequirement(this.eventId, this.idProgram).subscribe(
       result => {
          this.event = result;
          // this.queryModules();

          console.log(this.event);
          // this.inscriptions = this.event[0].inscribed;          
          
          //prueba total
          // var total = this.event.total;
          // console.log(this.inscriptions);
          // this.todos();
          // console.log(total);
          this.llenarRequirement();
       },
       error => {
          var errorMessage = <any>error;
          console.log(errorMessage);
       });
  }
  llenarRequirement(){
    
    for(let i of this.event){
      console.log("entra")
      console.log(i);
      console.log(i);
      console.log(i);
      
      let personaR = {} as Requirement;
      personaR.name = "";
      personaR.photocopy_ci = false;
      personaR.photocopy_titule = false;
      personaR.photograpy = false;
      console.log(personaR);
      this._peticionesService.getPerson(i.inscribed._id).subscribe(
        response =>{
          this.res = response;
          console.log(this.res);
          personaR.name = this.res.first_name;
        } 
      )
      console.log(personaR.name);
      if(i.inscribed.profile.requirements != undefined){
        if(i.inscribed.profile.requirements.photocopy_ci != undefined){
          personaR.photocopy_ci = true;
        }
        if(i.inscribed.profile.requirements.photocopy_titule != undefined){
        personaR.photocopy_titule = true;
        }
        if(i.inscribed.profile.requirements.photograpy != undefined){
          personaR.photograpy = true;
        }  
        // console.log("entra43eads")
      }

       
      this.inscriptions.push(personaR);
      console.log(personaR);
      // personaR.photocopy_ci = 

    }
  }
  // todos() {
  //   for (let i = 0; i <= this.states.length; i++) {
  //     this.states.pop(); i = 0;
  //   }
  //   for (let i of this.inscriptions) {
  //     this.states.push(i);
  //   }
  // }
  catchRequeriment(){
    
  }
  cancelar(){
    window.history.back();
  }
}
export interface Requirement{
    name: string,
    photograpy: Boolean,
    photocopy_ci: Boolean,
    photocopy_titule: Boolean
}