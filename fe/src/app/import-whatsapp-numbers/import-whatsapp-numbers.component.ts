import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-import-whatsapp-numbers',
  templateUrl: './import-whatsapp-numbers.component.html',
  styleUrls: ['./import-whatsapp-numbers.component.css']
})
export class ImportWhatsappNumbersComponent implements OnInit {

  public whatsGroupName;
  public whatsNumbers;
  public numbers=[];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){

    this.fixText();
    console.log(this.whatsGroupName);
    console.log(this.whatsNumbers);


  }
  fixText(){
    var numeros=this.whatsNumbers.split(',');
    console.log(numeros);
    numeros.forEach(element => {
      if (element.split(';')[1] != undefined) {
        if (element.split(';')[1].length == 8) {
           this.numbers.push( element.split(';')[1]);
        }
      
     }
    });
    console.log(this.numbers);


  }
  cancel(){


  }

}
