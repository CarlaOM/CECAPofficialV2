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
  public check;
  public photo;
  public checks;
  public resultado;
  public a;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    this.res = new Person("", "", null, null, null, "", "", null, "");
    this.findEventId();
    
    // this.query();
  }
  findEventId() {
    this.route.params.subscribe(params => {
      this.eventId = params.id;
      this.findProgramId();
    });
  }
  findProgramId() {
    this._peticionesService.getEvent(this.eventId).subscribe(
      response => {
        this.resultado = response;
        this.idProgram = this.resultado.programs;
        this.query();
      }
    )
  }
  query() {
    this._peticionesService.postRequirement(this.eventId, this.idProgram).subscribe(
      result => {
        this.event = result;
        // this.queryModules();

        // console.log(this.event);
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
  llenarRequirement() {
    this.a = 0;
    for (let i of this.event) {

      let personaR = {} as Requirement;
      personaR.position = this.a;
      personaR.name = "";
      personaR.photocopy_ci = false;
      personaR.photocopy_titule = false;
      personaR.photograpy = false;
      personaR.idProfile = i.inscribed.profile._id;
      // console.log(personaR);
      this._peticionesService.getPerson(i.inscribed._id).subscribe(
        response =>{
          this.res = response;
          // console.log(this.res);
          personaR.name = this.res.first_name;
          personaR.idPerson = this.res._id;
        }
      )
      if (i.inscribed.profile.requirements != undefined) {
        if (i.inscribed.profile.requirements.photocopy_ci != false) {
          personaR.photocopy_ci = true;
        }
        if (i.inscribed.profile.requirements.photocopy_titule != false) {
          personaR.photocopy_titule = true;
          // document.getElementsByClassName('check')[this.a+1].defaultChecked = true;
        }
        if (i.inscribed.profile.requirements.photograpy != false) {
          // document.getElementsByClassName('check')[this.a + 2].defaultChecked = true;
          personaR.photograpy = true;
        }
      }


      this.inscriptions.push(personaR);
      // console.log(personaR);
      // personaR.photocopy_ci = 
      this.a++;

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
  update(a, id, profileId) {
    this.checks = document.getElementsByClassName('check');
    var photo = this.checks[(a * 3)].checked;
    var ci = this.checks[(a * 3) + 1].checked;
    var titulo = this.checks[(a * 3) + 2].checked;
    // console.log(this.checks);
    this._peticionesService.updateProfilePerson(id, profileId, photo, ci, titulo).subscribe(r => {
      // console.log(r);
    });
  }
  cancelar() {
    window.history.back();
  }
}
export interface Requirement {
  idPerson: string;
  idProfile: string;
  position: number;
  name: string,
  photograpy: Boolean,
  photocopy_ci: Boolean,
  photocopy_titule: Boolean
}