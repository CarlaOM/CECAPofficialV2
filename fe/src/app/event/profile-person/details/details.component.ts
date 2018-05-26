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
  public program;
  public programName;

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
  
    this._peticionesService.getPersonProgram(this.personId, this.profileId,).subscribe(
      result => {
         this.program = result;
         console.log(result)
        //  this.programPerson = this.person.profile.programs;
        //  console.log(this.programPerson)
      },
      error => {
         console.log(<any>error);
      });
  }
}