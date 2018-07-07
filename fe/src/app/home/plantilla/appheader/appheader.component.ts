import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../../services/peticiones.service';
import { BackupService } from '../../../services/backup.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { Identity } from '../../../services/global';
import { AuthService } from "../../../services/authentication.service";
@Component({
    selector: 'app-appheader',
    templateUrl: './appheader.component.html',
    styleUrls: ['./appheader.component.css'],
    providers: [PeticionesService, AuthService]
})
export class AppheaderComponent implements OnInit {
    public nameUser;
    public role;
    public dates;
    public loader:Boolean;
    constructor(
        protected localStorage: AsyncLocalStorage,
        private _router: Router,
        private _peticionesService: PeticionesService,
        private _backupService:BackupService,
        private _authService: AuthService

    ) { }

    ngOnInit() {
        this.nameUser = Identity.name;
        this.queryRol();
    }
    logOut() {
        this._authService.logout();
        this._router.navigate(['/login']);
        //   this.localStorage.removeItem('Identity').subscribe(() => { });
        //   Identity._id = '';
        //   Identity.rol = '';
        //   Identity.name = '';
        //   this._router.navigate(['/login']);
    }
    backup2() {
       return this._backupService.backup2(Identity)
        .subscribe(res => {
            console.log(res);
            //window.open(URL.createObjectURL(res.url));
        },
        err => {
           console.log(err); 
        })
    }
    backup() {
        this.loader = false;
        this._backupService.backup3(Identity)
            .subscribe(res => {
                console.log(res);
                //window.open(window.URL.createObjectURL(res));
            },
            err => {
               console.log(err); 
            })
        }

    // backupe() {
    //     return this._backupService.backupfile(Identity).subscribe(hero => this.dates.push(hero));
    // }
    queryRol(){
        //console.log(Identity.rol)
     this._peticionesService.getRole(Identity.rol).subscribe(
         result => {
          this.role = result;
 
            //  if(this.role.name=='Admin'){
            //      this.queryEvents();
            //  }else{
            //      this.queryEventsSucursalActive();
            //  }
 
         },
         error=>{
          var errorMessage = <any>error;
          console.log(errorMessage);
         }
     );
     
     }

     BackupDemo(){
       var passCode = window.prompt("Ingrese su contraseña para realizar el backup y descargar comprimido", "")
       console.log(passCode)
       if(passCode != null || passCode != ''){
            this._backupService.backup3(Identity._id +'-'+ passCode).subscribe(
            res => {
                console.log(res);
                //window.open(window.URL.createObjectURL(res));
                window.alert('Backup realizado :)');
            },
            err => {
            console.log(err); 
            window.alert('Error, Solo un usuario autorizado puede Hacer el Bachup');
            });
        }else{
            console.log('vacio')
        }
     
    }
}
