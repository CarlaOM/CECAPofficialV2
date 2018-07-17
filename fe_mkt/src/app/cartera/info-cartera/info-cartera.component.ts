import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-info-cartera',
  templateUrl: './info-cartera.component.html',
  styleUrls: ['./info-cartera.component.css'],
  providers: [ PeticionesService]
})
export class InfoCarteraComponent implements OnInit {


  public persons;
  public carteraId;
  public cartera;
  public user;
  public userName: string;
  public userRecordDate;
  ////////////////////////////////////////////////////
  public page;
  public total;
  public totalPag;
  public mostrar = [];
  ////////////////////////////////////////////////////

  constructor(

    private _peticionesService: PeticionesService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
   this.queryPerson();
   this.findCartera();
   this.findPerson();
   
   
    
  }
  dis(){
    this.page = this.page-1;
    var inicio = (8*(this.page-1));
    var final = (8*(this.page-1))+8;
    this.mostrar = [];
    for(var a = inicio  ; a < final ; a++ ){
      this.mostrar.push(this.persons[a]);
  }
  }
  aum(){
    this.page = this.page+1;
    // console.log(this.page)
    var inicio = (8*(this.page-1));
    // console.log(inicio)
    var final = (8*(this.page-1))+8;
    if(final > this.total){
      final = this.total;
    }
    // console.log(final)
    this.mostrar = [];
    for(var a = inicio  ; a < final ; a++ ){
        this.mostrar.push(this.persons[a]);
    }
  }
  mostrarCartera(){
    this.page = 1;
    this.total = this.persons.length;
    if(this.total == 0){
      this.totalPag = 1;
    } else{
    this.totalPag = Math.ceil(this.total/8);
    }
    this.mostrar = []
    // console.log(this.totalPag)
    if(this.totalPag > 1){
      for(var a = 0 ; a < 8 ; a++){
      this.mostrar.push(this.persons[a]) ;}
    } else{
      this.mostrar = this.persons;
    }
    
  }
  queryPerson(){
    this.route.params.subscribe(params => {
        this.carteraId = params.id;
        
     });
    //  this._peticionesService.getEvent(this.personId).subscribe(
    //     result => {
    //        this.person = result;
    //        console.log(this.person);
           
    //        //prueba total
    //        var o =this.person.total;
    //     },
    //     error => {
    //        var errorMessage = <any>error;
    //        console.log(errorMessage);
    //     }
    //  );
   }
   findPerson(){

      this._peticionesService.getPersonCartera(this.carteraId).subscribe(response=>{
        this.persons=response;
        this.mostrarCartera();
      });

    
   }
   findCartera(){
    this._peticionesService.getCartera(this.carteraId).subscribe(
       result =>{
         this.cartera=result;
         this.findOneUser();
        
       },
       error =>{
         var errorMessage=<any>error;
         console.log(errorMessage);
       }

    )
   }
   findOneUser(){
    this._peticionesService.getOneUser(this.cartera.user).subscribe(response=>{
      this.user=response;
      this.userName=this.user.name;
      this.userRecordDate=this.user.record_date;
      // console.log(this.user);
    });
    
    
   }
}
