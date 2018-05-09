import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../../services/peticiones.service';
import { Person } from '../../modelo/person';

@Component({
  selector: 'app-profile-person',
  templateUrl: './profile-person.component.html',
  styleUrls: ['./profile-person.component.css'],
  providers: [ PeticionesService]
})
export class ProfilePersonComponent implements OnInit {
  public person;
  public personId;
  public date;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _peticionesService: PeticionesService
  ) { this.date = new Date(); }

  ngOnInit() {
    this.queryPersonId();
    this.findPerson();
  }
  queryPersonId(){
    this.route.params.subscribe(params => {
    this.personId=params.id;
     });
  }
  findPerson(){
    console.log(this.personId)
    this._peticionesService.getPerson(this.personId).subscribe(
      result => {
         this.person = result;
         console.log(result)
      },
      error => {
         console.log(<any>error);
      });
  }
  fillModulars(){}
  fillFinalWork(){}
  fillRequirements(){}
  editProfile(_id:string){
    this.router.navigate(['/home/profile/edit', _id]);
  }
}
