import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../../services/peticiones.service';
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

    constructor(
        protected localStorage: AsyncLocalStorage,
        private _router: Router,
        private _peticionesService: PeticionesService,
        private _authService: AuthService

    ) { }

    ngOnInit() {
        this.nameUser = Identity.name;
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
    backup() {
        this._peticionesService.backup().subscribe(
            result => {
                alert('backup realizado');
                var blob = new Blob([result]);
                var url = window.URL.createObjectURL(blob);
                window.open(url);
            },
            error => {
                var errorMessage = <any>error;
                console.log(errorMessage);
                window.alert('Error, no se pudo realizar backup');
            }
        );
    }
}
