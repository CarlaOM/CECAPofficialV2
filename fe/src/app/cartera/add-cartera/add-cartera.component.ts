import { Component, OnInit, ElementRef,ViewChild,Output,EventEmitter } from '@angular/core';
import {PeticionesService } from '../../services/peticiones.service';
import { Identity,Roles,CarteraS } from "../../services/global";
import {Cartera} from '../../modelo/cartera';
import { ActivatedRoute,Router } from "@angular/router";

@Component({
  selector: 'app-add-cartera',
  templateUrl: './add-cartera.component.html',
  styleUrls: ['./add-cartera.component.css'],
  providers:[PeticionesService]
  
})
export class AddCarteraComponent implements OnInit {

  @ViewChild('name') nameRef:ElementRef;
  @Output()MessageEvent=new EventEmitter();
  @ViewChild("close", {read: ElementRef}) close: ElementRef;
  
  public cartera;

  constructor(private _peticionesService:PeticionesService) { 
     this.cartera = new Cartera ("",null)
  }

  submitted = false;
  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];
  model = [, '','', ,"",'', ''];
  onSubmit() { this.submitted = true; }
  ngOnInit() {
  }
  simbolos(nameV){
    console.log("ingreso simbolos");
    var res = false;
    for(var i = 0; i<nameV.length;i++){
      if(nameV[i] == '!' || nameV[i] == '@' || nameV[i] == '#' || nameV[i] == '$' || nameV[i] == '%' || nameV[i] == '^' ){res = true;}
    }
    return res;
  }
  guardar(){
    // console.log("hola pao" + this.cartera.name);
    this.cartera.name=this.nameRef.nativeElement.value;
    console.log(this.cartera);
    if(this.simbolos(this.nameRef.nativeElement.value)){
      console.log("hay simbolos");
      window.alert("El nombre de cartera es requerido");
    }else{
      this._peticionesService.crearCartera(this.cartera).subscribe(
    
        Response=> {
          console.log("guardado")
        },
        error=>{}
      )
    }
  }
  save(){
    const name=this.nameRef.nativeElement.value;

    const newCartera=new Cartera(name,null);
    console.log(newCartera);

    if(this.nameRef.nativeElement.value==''){

      window.alert("Asegurese que todos los campos no esten vacios")
    }else{
      this._peticionesService.addCartera(newCartera).subscribe(response=>{
        this.MessageEvent.emit();
  
        this.close.nativeElement.click();
      })

    }

   
  }

}
