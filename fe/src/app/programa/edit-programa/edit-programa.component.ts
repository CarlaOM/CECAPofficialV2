import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { ActivatedRoute,Router } from "@angular/router";
import { Programa } from '../../modelo/programa';

@Component({
  selector: 'app-edit-programa',
  templateUrl: './edit-programa.component.html',
  styleUrls: ['./edit-programa.component.css'],
  providers: [ PeticionesService]
})
export class EditProgramaComponent implements OnInit {
  @ViewChild('name') nameRef:ElementRef;
  public program;
  public programName;
  public programId;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private _peticionesService: PeticionesService,
  ) { }

  ngOnInit() {
    this.queryProgramId();
    this.findProgram();
  }
  queryProgramId(){
    // console.log('hasdf');
      this.route.params.subscribe(params => {
      this.programId=params.name;
   });
  }
  findProgram(){
     this._peticionesService.getProgram(this.programId).subscribe(
        result =>{
          this.program=result; console.log(this.program)
          this.programName=this.program.name;  
        },
        error =>{
          console.log(<any>error);
        })
  }
  editProgram(){
    //console.log(this.program);
    this.program.name=this.nameRef.nativeElement.value;
    
    if(this.nameRef.nativeElement.value==''){
      window.alert("Asegurese que todos los campos esten llenos");
    }else{
      this._peticionesService.updateProgram(this.program).subscribe(
        result=>{
          var res=result;
          console.log(res);
          this.router.navigate(['home/program']);
        },
        error=>{
          console.log(<any>error);
        })
    }
  }

}