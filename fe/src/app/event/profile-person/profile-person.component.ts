import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../../services/peticiones.service';

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
  public carteras;
  public carteraReturned;
  public ocupation;
  public ocupations;
  public programsPerson;
  public programReturned;  
  public programsId:Array<any> = [];
  public listPrograms: Array<any> = []; 

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
  queryPersonId(){
    this.route.params.subscribe(params => {
    this.personId=params.id;
    });
  }
  findPerson(){
    // console.log(this.personId)
    this._peticionesService.getPerson(this.personId).subscribe(
      result => {
         this.person = result;
        //  console.log(result)
         this.findCartera();
        
         this.ocupation = this.person.ocupation;
        //  console.log(this.ocupation)
         this.ocupations = this.person.descOcupation;
        //  console.log(this.ocupations)
         this.programsPerson = this.person.profile.programs;
         console.log(this.programsPerson)
         this.viewPrograms();
      },
      error => {
         console.log(<any>error);
      });
  }
  findCartera(){
    this._peticionesService.getCartera(this.person.carteras).subscribe(
    result =>{
      this.carteraReturned=result;
      //console.log(this.carteraReturned)
    },
    error =>{
      console.log(<any>error);
    });
  }
  findProgram(){
    this._peticionesService.getProgram(this.programsId).subscribe(
      result => {
        this.programReturned = result;
        console.log(result)
      },
      error => {
        console.log(<any>error);
      });
}
  viewPrograms(){
    for (let i = 0; i <= this.listPrograms.length; i++) {
      this.listPrograms.pop(); i = 0;
    }
    for(let i of this.programsPerson){
        // if(i.programsPerson.programs == i.allPrograms.id){
          this.listPrograms.push(i);
        // }
      }
    console.log(this.listPrograms)
  }
  viewDetails(ppId){
    this.router.navigate(['home/detailsProfile', ppId]);
  }
}