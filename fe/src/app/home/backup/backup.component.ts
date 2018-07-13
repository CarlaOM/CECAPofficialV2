import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from "../../services/authentication.service";

import { PeticionesService } from '../../services/peticiones.service';
import { BackupService } from '../../services/backup.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { Identity } from '../../services/global';
import { User } from '../../modelo/user';
import { LocationStrategy } from '@angular/common';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-backup',
  templateUrl: './backup.component.html',
  styleUrls: ['./backup.component.css'],
  providers: [PeticionesService,UserService, AuthService]
})
export class BackupComponent implements OnInit {
  public user;
  public nameUser;
  private md5 = new Md5();
  public jsonWebToken;
  public token;

  constructor(
        protected localStorage: AsyncLocalStorage,
        private _router: Router,
        private _peticionesService: PeticionesService,
        private _backupService:BackupService,
        private _authenticationService: AuthService,
  ) { 
    this.user = new User('', '', null, '', '');
  }

  ngOnInit() {
    this.nameUser = Identity.name;
    console.log(this.nameUser)
  }
  BackupDemo(){
    let nuevoUsuarioLogin = {} as NuevoUsuario;
    nuevoUsuarioLogin._id = Identity._id;
    nuevoUsuarioLogin.active = Identity.active;
    nuevoUsuarioLogin.name = this.nameUser;
    nuevoUsuarioLogin.password_hash = this.md5.appendStr(this.user.password_hash).end();
    nuevoUsuarioLogin.rol = Identity.rol;
    console.log(nuevoUsuarioLogin.password_hash);

    if ((this.nameUser == 'a') || (this.nameUser == 'e') || (this.nameUser == 'i')) {
      this.user.name = this.nameUser;
      this._authenticationService.login(this.user).subscribe(response => {
        this.jsonWebToken = response;
        if (!this.jsonWebToken || !this.jsonWebToken.idToken) {
          alert('Usuario Incorrecto');
        } else {
          // Identity._id = this.jsonWebToken.identity._id;
          // Identity.rol = this.jsonWebToken.identity.rol;
          // Identity.name = this.user.name;
          // localStorage.setItem('idToken', this.jsonWebToken.identity._id);
          // localStorage.setItem("expiresIn", JSON.stringify(this.jsonWebToken.expiresIn));
          ///////////////////////////////////////////////////////////////////////////////////////7
          console.log('correct user :)')
          this._backupService.backup3(Identity._id +'-'+ this.user.password_hash).subscribe(
            res => {
                console.log(res);
                //window.open(window.URL.createObjectURL(res));
                window.alert('Backup realizado :)');
                this._router.navigate(['/']);
            },
            err => {
            console.log(err); 
            window.alert('Error, Solo un usuario autorizado puede Hacer el Bachup');
            });
        //////////////////////////////////////////////////////////////////////////
          
        }
      },
        error => {
          //console.log(<any>error);
          alert('Usuario Incorrecto!');
          var errorMessage = <any>error;
          if (errorMessage != null) {
            var body = JSON.parse(error.body);
          }

        }
      );


    } else {
      this._authenticationService.login(nuevoUsuarioLogin).subscribe(response => {
        this.jsonWebToken = response;
        // console.log(this.jsonWebToken);
        if (!this.jsonWebToken || !this.jsonWebToken.idToken) {
          alert('Usuario Incorrecto');
        } else {
          // Identity._id = this.jsonWebToken.identity._id;
          // Identity.rol = this.jsonWebToken.identity.rol;
          // Identity.name = this.user.name;
          // localStorage.setItem('idToken',this.jsonWebToken.identity._id);
          // localStorage.setItem("expiresIn", JSON.stringify(this.jsonWebToken.expiresIn));
          ///////////////////////////////////////////////////////////////////////////////////////7
          console.log('correct user :)')
          this._backupService.backup3(Identity._id +'-'+ this.user.password_hash).subscribe(
            res => {
                console.log(res);
                //window.open(window.URL.createObjectURL(res));
                window.alert('Backup realizado :)');
                this._router.navigate(['/']);
            },
            err => {
            console.log(err); 
            window.alert('Error, Solo un usuario autorizado puede Hacer el Bachup');
            });
        //////////////////////////////////////////////////////////////////////////
          console.log('hola ya me logee')
          

        }
      },
        error => {
          //console.log(<any>error);
          alert('Usuario nuevo Incorrecto!');
          var errorMessage = <any>error;
          console.log(errorMessage)
          if (errorMessage != null) {
            var body = JSON.parse(error.body);
          }

        }
      );

     }
  }
    
  
 
}
export interface NuevoUsuario {
  _id: string,
  name: string,
  active: boolean,
  password_hash: any,
  rol: string,

}