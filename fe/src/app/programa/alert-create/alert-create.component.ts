import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-alert-create',
  templateUrl: './alert-create.component.html',
  styleUrls: ['./alert-create.component.css'],
  providers: [PeticionesService]
})
export class AlertCreateComponent implements OnInit {
  public programs;
  @ViewChild("close", {read: ElementRef}) close: ElementRef;

  constructor(
    private _peticionesService: PeticionesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.queryPrograms();
  }
  queryPrograms(){
    this._peticionesService.getPrograms().subscribe(response => {
        this.programs = response;
        console.log(this.programs.length);
       },
       error=>{
        var errorMessage = <any>error;
        console.log(errorMessage);
       }
      );
   }
   craerProgram(){
    this.router.navigate(['/home/program/add']);
    this.close.nativeElement.click();
   }
   continuar(){
    this.router.navigate(['/home/events/add']);
    this.close.nativeElement.click();
   }
}
