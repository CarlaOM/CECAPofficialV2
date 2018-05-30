import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../../../services/peticiones.service';
import { Review } from '../../../modelo/review';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css'],
  providers: [PeticionesService]
})
export class AddReviewComponent implements OnInit {
  public profileId;  
  public personId;
  public model: Review;
  public states;   

  constructor(
    private _peticionesService: PeticionesService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.model = new Review(new Date(), null, "", "");
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      var arrayIds = params.id.split('-');
      this.profileId = arrayIds[0];
      this.personId = arrayIds[1];

      this.model.profileId = this.profileId;
    });

    this.selectStates();
  }
  selectStates(){  
  }
  onSubmit() {
    console.log(this.model);
  }
  save() {
    if ((this.model.observations == '')) {
      window.alert("Asegurese de llenar todos los campos")
    } else {
      // if (this.model.date_review < new Date()) {
      //   window.alert("Asegurese que la fecha sea mayor a la de hoy")
      // } else {
        console.log(this.model);
        // envia el id de la persona q recibes como parametro al entrar a esta ventana, y el review q llenaste en la vista
        this._peticionesService.addReview(this.personId, this.model).subscribe(response => {
            var esperado = response;
            // console.log(esperado);
            alert("La Revision se creo con exito");
            // this.router.navigate(['/home/detailsProfile']);
            window.history.back()
            },
            error => {
              console.log(<any>error);
        });
      }
  }
  cancel() {
    // this.router.navigate(['home/review']);
    window.history.back();
  }
}
