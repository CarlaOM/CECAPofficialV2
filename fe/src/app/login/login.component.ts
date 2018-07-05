import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AsyncLocalStorage } from 'angular-async-local-storage';

import { GLOBAL, Identity } from '../services/global';
import { UserService } from '../services/user.service';
import { AuthService } from "../services/authentication.service";
import { User } from '../modelo/user';
import { LocationStrategy } from '@angular/common';
import { Md5 } from 'ts-md5/dist/md5';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService, AuthService]
})
export class LoginComponent implements OnInit {

  private md5 = new Md5();

  public title: string;
  public user: User;
  public identity; //para guardar la identificacion
  public jsonWebToken;
  public token;
  public status: string;
  public passO;
  public pass;
  public nameO;
  public name;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _authenticationService: AuthService,
    // protected localStorage: AsyncLocalStorage
  ) {
    this.title = 'CECAP COMPANY';
    this.user = new User('', '', null, '', '');
  }

  ngOnInit() {
    // console.log('login.component cargado');
    // console.log('this._userService.register()');
  }
  onSubmit() {

    // console.log(this.user);//sadas
    let nuevoUsuarioLogin = {} as NuevoUsuario;
    nuevoUsuarioLogin._id = this.user._id;
    nuevoUsuarioLogin.active = this.user.active;
    nuevoUsuarioLogin.name = this.user.name;
    nuevoUsuarioLogin.password_hash = this.md5.appendStr(this.user.password_hash).end();
    nuevoUsuarioLogin.rol = this.user.rol;

    // console.log(nuevoUsuarioLogin.password_hash);

    if ((this.user.name == 'a') || (this.user.name == 'e') || (this.user.name == 'i')) {

      this._authenticationService.login(this.user).subscribe(response => {
        this.jsonWebToken = response;
        // console.log(this.jsonWebToken);
        if (!this.jsonWebToken || !this.jsonWebToken.idToken) {
          alert('Usuario Incorrecto');
        } else {
          Identity._id = this.jsonWebToken.identity._id;
          Identity.rol = this.jsonWebToken.identity.rol;
          Identity.name = this.user.name;
          localStorage.setItem('idToken', this.jsonWebToken.identity._id);

          localStorage.setItem("expiresIn", JSON.stringify(this.jsonWebToken.expiresIn));


          this._router.navigate(['/']);

        }
      },
        error => {
          //console.log(<any>error);
          alert('Usuario Incorrecto');
          var errorMessage = <any>error;
          if (errorMessage != null) {
            var body = JSON.parse(error.body);
            this.status = 'error';
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
          Identity._id = this.jsonWebToken.identity._id;
          Identity.rol = this.jsonWebToken.identity.rol;
          Identity.name = this.user.name;
          let iden=Identity._id;
          localStorage.setItem('idToken',this.jsonWebToken.identity._id);

          localStorage.setItem("expiresIn", JSON.stringify(this.jsonWebToken.expiresIn));


          this._router.navigate(['/']);

        }
      },
        error => {
          //console.log(<any>error);
          alert('Usuario Incorrecto');
          var errorMessage = <any>error;
          if (errorMessage != null) {
            var body = JSON.parse(error.body);
            this.status = 'error';
          }

        }
      );

    }




    // this._userService.getPassword(this.user.name).subscribe(
    //     Response => {
    //       this.passO = Response;
    //       this.pass = this.passO.password_hash;
    //     },
    //     error => {
    //       var err = error;  
    //     }
    // )

    // this._userService.signin(this.user).subscribe(
    //    response => {
    //       this.identity = response;
    //       if (!this.identity || !this.identity._id) {
    //          alert('Usuario Incorrecto');
    //       } else {
    //          Identity._id = this.identity._id;
    //          Identity.rol = this.identity.rol;
    //          Identity.name = this.user.name;
    //          this.localStorage.setItem('Identity', { _id: this.identity._id }).subscribe(() => { console.log('verifico el usuario') });
    //          this._router.navigate(['/']);

    //       }
    //    },
    //    error => {
    //       //console.log(<any>error);
    //       alert('Usuario Incorrecto');
    //       var errorMessage = <any>error;
    //       if (errorMessage != null) {
    //          var body = JSON.parse(error.body);
    //          this.status = 'error';
    //       }

    //    }
    // );
  }

  //  guardarSesion(){
  //    localStorage.setItem('nombreUser',this.nombreUser);//modifica en el localStorage 
  //    console.log(localStorage.getItem('nombreUser'));//obtiene el dato del localStorage
  //  }
}

export interface NuevoUsuario {
  _id: string,
  name: string,
  active: boolean,
  password_hash: any,
  rol: string,

}