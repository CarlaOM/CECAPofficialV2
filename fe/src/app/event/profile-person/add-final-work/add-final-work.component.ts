import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../../../services/peticiones.service';
import { FinalWork } from '../../../modelo/finalWork';

@Component({
  selector: 'app-add-final-work',
  templateUrl: './add-final-work.component.html',
  styleUrls: ['./add-final-work.component.css'],
  providers: [PeticionesService]
})
export class AddFinalWorkComponent implements OnInit {
  public profileId;  
  public personId;
  public model: FinalWork;
  public facilitators;

  constructor(
    private _peticionesService: PeticionesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.model = new FinalWork(new Date(), "", "", "", "", null);
  }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      var arrayIds = params.id.split('-');
      this.profileId = arrayIds[0];
      this.personId = arrayIds[1];

      this.model.profileId = this.profileId;
    });

    this.queryFacilitators();
  }
  queryFacilitators() {
    this._peticionesService.getFacilitadores().subscribe(response => {
      this.facilitators = response;
      // console.log(this.facilitators);
    },
      error => {
        console.log(<any>error);
      });
  }
  onSubmit() {
    // console.log(this.model);
  }
  save() {
    if ((this.model.name == '') || (this.model.origin == '')) {
      window.alert("Asegurese de llenar todos los campos")
    } else {
        // console.log(this.model);
        // envia el id de la persona q recibes como parametro al entrar a esta ventana, y el finalwork q llenaste en la vista
        this._peticionesService.addFinalWork(this.personId, this.model).subscribe(response => {
            var esperado = response;
            // console.log(esperado);
            alert("El Trabajo Final se creo con exito");
            // this.router.navigate(['/home/detailsProfile']);
            window.history.back()
          },
          error => {
            console.log(<any>error);
        });
    }
  }
  cancel() {
    // this.router.navigate(['home/finalWork']);
    window.history.back();
  }
}