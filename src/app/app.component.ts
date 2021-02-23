import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

   row=[1,2,3,4,5]
   col=[1,2,3,4,5]

   player1="1";
   player2="2"

   listPLayers = 
   [{name:'player1', score:0}, {name:'player2',score:0}]

   bintang="*"
   baris=0;
   kolom=0;

  
}
