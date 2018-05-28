import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../../../services/peticiones.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [ PeticionesService]
})
export class DetailsComponent implements OnInit {
  public date;
  public profileId;
  public personId;
  public details;
  public program;
  public modulars: Array<any> = [];
  public profile;
  public requirements;
  public finalWork;
  public facilitator;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _peticionesService: PeticionesService
  ) { this.date = new Date(); }

  ngOnInit() {
    this.queryProfilePersonId();
    this.findProgramPerson();
  }
  queryProfilePersonId(){
    this.route.params.subscribe(params => {
      var arrayIds = params.id.split('-');
      this.profileId = arrayIds[0];
      this.personId = arrayIds[1];
    });
  }
  findProgramPerson(){
    console.log(this.profileId + ' este es el ID del perfil')
    console.log(this.personId + ' este es el ID de persona')
  
    this._peticionesService.postPersonProgramDetails(this.personId, this.profileId,).subscribe(
      result => {
        this.details = result
         console.log(result)

         this.profile = this.details.profile;
         this.requirements = this.details.profile.requirements; //console.log(this.requirements)
         this.finalWork = this.details.profile.final_work; console.log(this.finalWork)
        
         this.modules();
         this.findProgram();
         this.findFacilitator();
      },
      error => {
         console.log(<any>error);
      });
  }
  findProgram() {
    // console.log(this.programId)
    this._peticionesService.getProgram(this.profile.programs).subscribe(
       result => {
          this.program = result;
          // console.log(this.program)
       },
       error => {
          console.log(<any>error);
       })
  }
  modules() {
    for (let i = 0; i <= this.modulars.length; i++) {
      this.modulars.pop(); i = 0;
    }
    for (let i of this.details.modulars) {
      this.modulars.push(i);
    }
  }
  findFacilitator() {
    // console.log(this.programId)
    this._peticionesService.getFacilitador(this.finalWork.facilitator).subscribe(
       result => {
          this.facilitator = result;
          // console.log(this.facilitator)
       },
       error => {
          console.log(<any>error);
       })
  }
  cancelar(){
    window.history.back();
  }
  addFinalWork(){
    this.router.navigate(['/home/finalWork/add']);
  }
  addReview(){
    this.router.navigate(['/home/review/add']);
  }
}