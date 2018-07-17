import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../services/persona.service';
import { PeticionesService } from '../services/peticiones.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Pipe, PipeTransform } from '@angular/core';
import { all } from 'q';
// import { FilterPipe } from "./filter.pipe";

@Component({
  selector: 'app-segmentation',
  templateUrl: './segmentation.component.html',
  styleUrls: ['./segmentation.component.css'],
  providers: [PersonaService, PeticionesService]

})
export class SegmentationComponent implements OnInit {

  public programs;
  ////////////////////////////////////////////////////
  public page;
  public total;
  public totalPag;
  public mostrar = [];
  ////////////////////////////////////////////////////



  constructor(
    private router: Router,
    private _peticionesService: PeticionesService
  ) { }

  ngOnInit() {
    this._peticionesService.getPrograms().subscribe(
      result => {
        this.programs = result;
        this.mostrarCartera();
      },
      error => {
        console.log(<any>error);
      });
  }
  dis() {
    this.page = this.page - 1;
    var inicio = (8 * (this.page - 1));
    var final = (8 * (this.page - 1)) + 8;
    this.mostrar = [];
    for (var a = inicio; a < final; a++) {
      this.mostrar.push(this.programs[a]);
    }
  }
  aum() {
    this.page = this.page + 1;
    // console.log(this.page)
    var inicio = (8 * (this.page - 1));
    // console.log(inicio)
    var final = (8 * (this.page - 1)) + 8;
    if (final > this.total) {
      final = this.total;
    }
    // console.log(final)
    this.mostrar = [];
    for (var a = inicio; a < final; a++) {
      this.mostrar.push(this.programs[a]);
    }
  }
  mostrarCartera() {
    this.page = 1;
    this.total = this.programs.length;
    if (this.total == 0) {
      this.totalPag = 1;
    } else {
      this.totalPag = Math.ceil(this.total / 8);
    }
    this.mostrar = []
    if (this.totalPag > 1) {
      for (var a = 0; a < 8; a++) {
        this.mostrar.push(this.programs[a]);
      }
    } else {
      this.mostrar = this.programs;
    }
  }
  listPersonInteresados(_id: string) {
    //  var idInteresados=_id+'-'+'0';
    // this.router.navigate(['home/segmentacion/list/', idInteresados]);

    this.router.navigate(['home/segmentacion/list/', _id]);
  }
}
////////////
//  0 interesados
//  1 en duda
//  2 confirmados
//  3 isncritos
//  4 enlinea
//  5 proximo evento 
//  6 sin interes
//////// 
