import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { GLOBAL, Roles, Identity } from './global';
import { AsyncLocalStorage } from 'angular-async-local-storage';

@Injectable()
export class UserService {
      public url: string;

      constructor(
            private _router: Router,
            protected localStorage: AsyncLocalStorage,
            // private _http: Http
            private _http: HttpClient
      ) {
            this.url = GLOBAL.url;
      }
      register() {
            return "texto desde el servicio usuario";

      }
      //metodo para autenticar el usuario
      signup(user_to_login, gettoken = null) {
            if (gettoken != null)//sacamos el token y preguntamos
            {
                  user_to_login.gettoken = gettoken;
            }
            let params = JSON.stringify(user_to_login);
            // let headers = new Headers({ 'Content-Type': 'application/json' });
            var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

            return this._http.post(this.url + 'login', params, { headers: headers });
      }
      signin(user_to_login) {

            let body = JSON.stringify(user_to_login);//get interface
            var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
            //   let headers = new Headers();
            //   headers.append('Content-Type', 'application/json');
            // console.log(body);
            return this._http.post(this.url + 'Mkt_users/login', body, { headers: headers });
      }
      initApp() {
            this._http.get(this.url + 'Mkt_users/roles')
                  .map((response: Response) => response.json())
                  .subscribe(
                        response => {
                              response.forEach(rol => {
                                    if (rol.name == 'Admin') { Roles[0]._id = rol._id; }
                                    else if (rol.name == 'Ejecutivo') { Roles[1]._id = rol._id; }
                              });
                        }
                  )

            this.localStorage.getItem('Identity').subscribe((id) => {
                  if (id != null) {
                        // console.log(id)
                        let body = JSON.stringify(id)
                        // let headers = new Headers();
                        // headers.append('Content-Type', 'application/json');
                        var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
                        this._http.post(this.url + 'Mkt_users/auth', body, { headers: headers })
                              .map((response: Response) => response.json())
                              .subscribe(
                                    response => {
                                          // console.log(Identity, response)
                                          Identity._id = response._id;
                                          Identity.rol = response.rol;
                                          Identity.name = response.name;
                                          this._router.navigate(['/']);
                                    }
                              )
                  } else {
                        // console.log('sin _id en localStorage')

                  }
            });
      }
}