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
  public model;
  public details;
  public reviews;
  
  ///////////////////////////////
  public state1;
  public state2;
  public state3;
  public state4;
  public state5;
  public state6;
  public state7; 
  public state8;
  public state9;

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

    this.registeredReviews();
  }
  registeredReviews(){ 
    this._peticionesService.postPersonProgramDetails(this.personId, this.profileId).subscribe(
      result => {
        this.details = result
        // console.log(this.details)

        this.reviews = this.details.profile.final_work.revisions; 
        // console.log(this.reviews)

        for(let i = 0; i < this.reviews.length; i++){
          if(this.reviews[i].state == 1)
            this.state1 = true;
          if(this.reviews[i].state == 2)
            this.state2 = true;
          if(this.reviews[i].state == 3)
            this.state3 = true;
          if(this.reviews[i].state == 4)
            this.state4 = true;
          if(this.reviews[i].state == 5)
            this.state5 = true;
          if(this.reviews[i].state == 6)
            this.state6 = true;
          if(this.reviews[i].state == 7)
            this.state7 = true;
          if(this.reviews[i].state == 8)
            this.state8 = true;
          if(this.reviews[i].state == 9)
            this.state9 = true;
        }
      },
      error => {
         console.log(<any>error);
      });
  }
  onSubmit() {
    // console.log(this.model);
  }
  save() {
    if ((this.model.observations == '')) {
      window.alert("Asegúrese de llenar todos los campos")
    } else {
      // if (this.model.date_review < new Date()) {
      //   window.alert("Asegurese que la fecha sea mayor a la de hoy")
      // } else {
        // console.log(this.model);
        // envia el id de la persona q recibes como parametro al entrar a esta ventana, y el review q llenaste en la vista
        this._peticionesService.addReview(this.personId, this.model).subscribe(response => {
            var esperado = response;
            // console.log(esperado);
            alert("La Revisión se creó con exito");
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
