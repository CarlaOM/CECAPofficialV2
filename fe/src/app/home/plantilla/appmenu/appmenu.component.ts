import { Component, OnInit } from '@angular/core';
import { Identity } from '../../../services/global';
import { PeticionesService } from '../../../services/peticiones.service';


@Component({
  selector: 'app-appmenu',
  templateUrl: './appmenu.component.html',
  styleUrls: ['./appmenu.component.css'],
  providers: [ PeticionesService]

})
export class AppmenuComponent implements OnInit {
  public nameUser;
  public prueba= 'add';
  public role;
  constructor(

    private _peticionesService: PeticionesService

  ) { }

  ngOnInit() {
    this.nameUser= Identity.name;

    this.queryRol();

  }
  queryRol(){
    //console.log(Identity.rol)
 this._peticionesService.getRole(Identity.rol).subscribe(
     result => {
      this.role = result;
     },
     error=>{
      var errorMessage = <any>error;
      console.log(errorMessage);
     }
 );
 }

}
