import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';
import { ActivatedRoute,Router } from "@angular/router";

@Component({
  selector: 'app-edit-facilitador',
  templateUrl: './edit-facilitador.component.html',
  styleUrls: ['./edit-facilitador.component.css'],
  providers: [PeticionesService]
})
export class EditFacilitadorComponent implements OnInit {
  public facilitador;
  public facilitadorId;
  public facilitadorName;
  public facilitadorJob;

  constructor(
    private _peticionesService: PeticionesService,
    private route: ActivatedRoute,
    public router: Router
  ) { }
  
  ngOnInit() {
    this.queryFacilitadorId();
    this.findFacilitador();
  }
 
  // simbolos(nameV){
  //   console.log("ingreso simbolos");
  //   var res = false;
  //   for(var i = 0; i<nameV.length;i++){
  //     if(nameV[i] == '!' || nameV[i] == '@' || nameV[i] == '#' || nameV[i] == '$' || nameV[i] == '%' || nameV[i] == '^' ){res = true;}
  //   }
  //   return res;
  // }
  queryFacilitadorId() {
    this.route.params.subscribe(params => {
       this.facilitadorId = params.id;
    });
  }
  findFacilitador() {
    this._peticionesService.getFacilitador(this.facilitadorId).subscribe(
       result => {
          this.facilitador = result;
          this.facilitadorName = this.facilitador.name;
          this.facilitadorJob = this.facilitador.job;
       },
       error => {
          console.log(<any>error);
       })
  }
  saveFacilitador() {
    this.facilitador.name = this.facilitadorName;
    this.facilitador.job = this.facilitadorJob;

    // if (this.facilitadorName == '' || this.facilitadorJob == '') {
    //       window.alert("Asegúrese que todos los campos esten llenados");
    // } else {
      //  console.log(this.facilitador);
       this._peticionesService.updateFacilitador(this.facilitador).subscribe(
          result => {
            //  console.log(result);
            //  var res = result;
            this.router.navigate(['home/facilitador']);
             alert('La edición se guardó correctamente');        
          },
          error => {
             console.log(<any>error);
             alert('Error al guardar verifique los datos');
          })
  }
  cancel(){
    this.router.navigate(['home/facilitador']);
    // window.history.back();         
 }
}