import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-profile-person',
  templateUrl: './profile-person.component.html',
  styleUrls: ['./profile-person.component.css'],
  providers: [PeticionesService]
})
export class ProfilePersonComponent implements OnInit {
  public person;
  public personId;
  public date;
  public carteras;
  public carteraReturned;
  public ocupation;
  public ocupations;
  public programs;
  public workshop;

  // public programsPerson;
  // public programReturned;
  // public programsId: Array<any> = [];
  // public listPrograms: Array<any> = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _peticionesService: PeticionesService
  ) { this.date = new Date(); }

  ngOnInit() {
    // this._peticionesService.getCarteras().subscribe(response=>{
    //   this.carteras=response;
    //   console.log(this.carteras);
    // });
    this.queryPersonId();
    this.findPerson();
  }
  queryPersonId() {
    this.route.params.subscribe(params => {
      this.personId = params.id;
    });
  }
  findPerson() {
    // console.log(this.personId)
    this._peticionesService.getPersonProfile(this.personId).subscribe(
      result => {
        this.person = result;
        console.log(this.person)
        
        this.ocupation = this.person.ocupation;
        //  console.log(this.ocupation)
        this.ocupations = this.person.descOcupation;
        //  console.log(this.ocupations)
        //  console.log(this.programsPerson)
        
        this.findWorkshops();

        // this.findCartera();

        // console.log(this.person.programDetails)
        for (let i = 0; i < this.person.profile.length; i++) {
          for (let j = 0; j < this.person.programDetails.length; j++) {
            // console.log(this.person.profile[i].programs)
            // console.log(this.person.programDetails[j].name)
            if (this.person.profile[i].programs == this.person.programDetails[j]._id) {
              this.person.profile[i].name = this.person.programDetails[j].name;
            }
          }
        }
        console.log(this.person.profile);
        // this.programsPerson = this.person.profile;
        //  this.viewPrograms();
      },
      error => {
        console.log(<any>error);
      });
  }
  findWorkshops(){
    this._peticionesService.getPersonWorkshop(this.personId).subscribe(
      result => {
        this.workshop = result;
        // console.log(this.workshop)

        for (let i = 0; i < this.workshop.workshops.length; i++) {
          for (let j = 0; j < this.workshop.workshopDetails.length; j++) {
            // console.log(this.workshop.workshops[i].events)
            // console.log(this.workshop.workshopDetails[j].name)
            if (this.workshop.workshops[i].events == this.workshop.workshopDetails[j]._id) {
              this.workshop.workshops[i].nameEvent = this.workshop.workshopDetails[j].name;
            }
          }
        }
        },
      error => {
        console.log(<any>error);
      });
  }
  // findCartera() {
  //   this._peticionesService.getCartera(this.person.carteras).subscribe(
  //     result => {
  //       this.carteraReturned = result;
  //       //console.log(this.carteraReturned)
  //     },
  //     error => {
  //       console.log(<any>error);
  //     });
  // }

  // findProgram() {
  //   this._peticionesService.getProgram(this.programsId).subscribe(
  //     result => {
  //       this.programReturned = result;
  //       console.log(result)
  //     },
  //     error => {
  //       console.log(<any>error);
  //     });
  // }
  // viewPrograms() {
  //   // console.log(this.personId)
  //   this._peticionesService.getPersonProfile(this.personId).subscribe(
  //     result => {
  //       this.programs = result;
  //       console.log(result)
  //     },
  //     error => {
  //       console.log(<any>error);
  //     });
  //   // for (let i = 0; i <= this.listPrograms.length; i++) {
  //   //   this.listPrograms.pop(); i = 0;
  //   // }
  //   // for(let i of this.programsPerson){
  //   //     // if(i.programsPerson.programs == i.allPrograms.id){
  //   //       this.listPrograms.push(i);
  //   //     // }
  //   //   }
  //   // console.log(this.listPrograms)
  // }
  viewDetails(_id) {
    var ppId = _id + '-' + this.personId;
    this.router.navigate(['home/detailsProfile', ppId]);
  }
  cancelar(){
    window.history.back();
  }
}