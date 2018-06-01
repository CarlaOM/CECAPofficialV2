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
  public personId;
  public profileId;
  public details;
  public program;
  public modulars: Array<any> = [];
  public profile;
  public requirements;
  public finalWork;
  public facilitator;
  public reviews;
  public close;
  public modulesReceived;

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
    // console.log(this.profileId + ' este es el ID del perfil')
    // console.log(this.personId + ' este es el ID de persona')
  
    this._peticionesService.postPersonProgramDetails(this.personId, this.profileId).subscribe(
      result => {
        this.details = result
         console.log(this.details)

         this.profile = this.details.profile;
         this.requirements = this.details.profile.requirements; //console.log(this.requirements)
         this.finalWork = this.details.profile.final_work; //console.log(this.finalWork)
         this.reviews = this.details.profile.final_work.revisions; //console.log(this.reviews)
        
         this.listModules();
         this.findProgram();
         this.findFacilitator();
         this.closeWork();
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
  listModules() {
    var x =[];
    for (let i = 0; i <= this.modulars.length; i++) {
      this.modulars.pop(); i = 0;
    }
    for (let i of this.details.modulars) {
      x.push(i.modules)      
      this.modulars.push(i);
    }
    console.log(x)
    this._peticionesService.postModules(x).subscribe(
      result => {
        this.modulesReceived = result;
        // console.log(this.modulesReceived)
        // console.log(this.modulars)

        for(let i=0; i < this.modulars.length; i++){
          this.modulars[i].name = this.modulesReceived[i].name;
        }
      },
      error => {
         console.log(<any>error);
      })
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
  closeWork(){
    console.log(":3")
    if(this.reviews != undefined){
      for(let i = 0; i < this.reviews.length; i++){
        if(this.reviews[i].state == 6){
          this.close = true;
          this.finalWork.date_end = this.reviews[i].date_review;
          this.profile.print_diploma = true;
        }
      }
    }
  }
  addFinalWork(){
    var ppId = this.profileId + '-' + this.personId;
    this.router.navigate(['/home/finalWork/add', ppId]);
  }
  addReview(){
    var ppId = this.profileId + '-' + this.personId;
    this.router.navigate(['/home/review/add', ppId]);
  }
  printCertificate(moduleId){
    var ppmId = this.personId + '-' + this.profileId + '-' + moduleId;
    this.router.navigate(['/home/printCertificate', ppmId]);

    let personProfileModule={} as PersonProfileModule;
            personProfileModule.personId = this.personId;
            personProfileModule.profileId = this.profileId;
            personProfileModule.moduleId = moduleId;
            console.log(personProfileModule);
            
    this._peticionesService.markPrintCertificate(personProfileModule).subscribe(response=>{
      var res = response
      console.log(res)
      // this.setListInscriptions(this.moduleId,this.moduleName);
    });
  }
}
export interface PersonProfileModule{
  personId:string,
  profileId:string,
  moduleId:string,
}