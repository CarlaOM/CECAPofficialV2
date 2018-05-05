import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { Event } from '../../modelo/event';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
   selector: 'app-addEvent',
   templateUrl: './addEvent.component.html',
   styleUrls: ['./addEvent.component.css'],
   providers: [ PeticionesService]
})
export class AddEventComponent implements OnInit {
   public programs;
   @ViewChild('description') descriptionRef: ElementRef;
   @ViewChild('date') dateRef: ElementRef;
   @ViewChild('total') totalRef: ElementRef;
   @ViewChild('program') programRef: ElementRef;
   @ViewChild("close", { read: ElementRef }) close: ElementRef;
   @Output() messageEvent = new EventEmitter();
   public model: Event;
   constructor(
     private _peticionesService: PeticionesService,
     private route: ActivatedRoute,
     private router: Router
    ) {
      this.model = new Event("","", null,null,"");
     }
     
   ngOnInit() {
      this._peticionesService.getPrograms().subscribe(response => {
         this.programs = response;
         console.log(this.programs);
      });
   }
   cancelar() {
    this.router.navigate(['home/events']);
    }
  onSubmit(){
   console.log(this.model);
  }
   save() {
      // const description = this.descriptionRef.nativeElement.value;
      // let date = this.dateRef.nativeElement.value;
      // const total = this.totalRef.nativeElement.value;
      // const program = this.programRef.nativeElement.value;
      // const newEvent = new Event(description, date, total, program);
      // console.log(newEvent);


      // if((this.descriptionRef.nativeElement.value=='')||(this.model.total==0)){
      if((this.model.description=='')||(this.model.total==0)){
        window.alert("Asegurese de llenar todos los campos")

      }else{
          // if(this.dateRef.nativeElement.value <new Date()){
          if(this.model.date_start<new Date()){
            window.alert("Asegurese que la fecha sea mayor a la de hoy")
            
          }else{
            this._peticionesService.addEvent(this.model).subscribe(response => {
                // console.log(response);
                this.messageEvent.emit();
                this.close.nativeElement.click();
             });

          }
       

      }
      
   }

}
