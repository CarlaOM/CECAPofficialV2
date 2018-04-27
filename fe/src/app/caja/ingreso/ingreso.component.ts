import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  constructor() { }
  submitted = false;
  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];
  model = [18, '','',4554,"", this.powers[0], ''];
  onSubmit() { this.submitted = true; }
  ngOnInit() {
  }

}
