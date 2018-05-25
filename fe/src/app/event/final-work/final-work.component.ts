import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-final-work',
  templateUrl: './final-work.component.html',
  styleUrls: ['./final-work.component.css'],
  providers: [PeticionesService]
})
export class FinalWorkComponent implements OnInit {
  public state;
  public observations;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    // queryPersonId()
  }

}
