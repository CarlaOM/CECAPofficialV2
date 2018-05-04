import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";
import {PeticionesService } from '../../services/peticiones.service';
import { Programa } from '../../modelo/programa';

@Component({
  selector: 'app-add-programa',
  templateUrl: './add-programa.component.html',
  styleUrls: ['./add-programa.component.css'],
  providers: [ PeticionesService]
})
export class AddProgramaComponent implements OnInit {
  public programs;
  public programObject;
  submitted = false;

  constructor(
    private _peticionesService:PeticionesService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this._peticionesService.getPrograms().subscribe(response=>{
      this.programs=response;
      console.log(this.programs);
    });
  }
  onSubmit() { this.submitted = true;
    console.log(this.programObject);
    this._peticionesService.addProgram(this.programObject).subscribe(response=>{
      this.router.navigate(['/home/program/']); 
    },error=>{
      console.log(<any>error);
    })
  }

}
