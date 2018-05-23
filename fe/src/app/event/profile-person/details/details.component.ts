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
  public program;
  public ppId;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _peticionesService: PeticionesService
  ) { this.date = new Date(); }

  ngOnInit() {
    this.queryProgramPersonId();
    this.findPP();
  }
  queryProgramPersonId(){
    this.route.params.subscribe(params => {
    this.ppId=params.id;
    });
  }
  findPP(){
    // console.log(this.ppId)
    // this._peticionesService.getProgramPerson(this.ppId).subscribe(
    //   result => {
    //      this.program = result;
    //      console.log(result)
    //     //  this.programPerson = this.person.profile.programs;
    //     //  console.log(this.programPerson)
    //   },
    //   error => {
    //      console.log(<any>error);
    //   });
  }
}