import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  // name = 'Angular ' + VERSION.major;

  board : any[][];
  b:number;
  k:number;

  //  row=[1,2,3,4,5]
  //  col=[1,2,3,4,5]

  flag=0;
   bintang="*";
   baris=1;
   kolom=1;
   ba=0;
   ko=0;
   count=0;
   i=0;
   j=0;
   player="0";
   winner:string
   winnerstat:boolean=false;
   countwin1=0;
   countwin0=0;
  

   ngOnInit(){
    this.board=[];
    for(var b=1;b<6;b++){
      this.board[b]=[];
      for(var k=1;k<6;k++){
        // this.board[k]=[];
        this.board[b][k]="*";
      }
     }
   }

   changePlayer(){
     if(this.winnerstat==false){
       if(this.baris>0 &&this.baris<=5&&this.kolom>0&&this.kolom<=5){
         if(this.board[this.baris][this.kolom]=="*"){
           this.board[this.baris][this.kolom]=this.player;
           if(this.player=="1"){
             this.player="0";
           }
           else{
             this.player="1";
           }
           this.checkWinner();
         }
         else{
           alert("Baris dan kolom tersebut sudah diisi");
         }
       }
       else if(this.baris<0){
         alert("Baris tidak boleh kurang dari 1");
       }
       else if(this.baris>5){
         alert("Baris tidak boleh lebih dari 5");
       }
       else if(this.kolom<0){
         alert("Kolom tidak boleh kurang dari 1")
       }
       else if(this.kolom>5){
         alert("Kolom tidak boleh lebih dari 5")
       }
       else{
         alert("Baris atau kolom tidak sesuai")
       }
    
     }
   }

   checkWinner(){
     
     //  buat baris hrs 11 21 31 41 51
     for(var b=1;b<6;b++){
       this.countwin0=0;
       this.countwin1=0;
       for(var k=1;k<6;k++){
         if(this.board[k][b]=="0"){
           this.countwin0++;
         }
         else if(this.board[k][b]=="1"){
           this.countwin1++;
         }
       }
       if(this.countwin0>=4){
         this.winner="The winner is Player 0";
         this.player="-";
         this.winnerstat=true;
       }
       else if(this.countwin1>=4){
         this.winner="The winner is Player 1"
         this.player="-";
         this.winnerstat=true;
       }
     }


     //  bua kolom hrs 11 12 13 14 15
     for(var b=1;b<6;b++){
       this.countwin0=0; //reset count klo beda baris
       this.countwin1=0;
       for(var k=1;k<6;k++){
         if(this.board[b][k]=="0"){
           this.countwin0++;
         }
         else if(this.board[b][k]=="1"){
           this.countwin1++;
         }
       }
       if(this.countwin0>=4){
         this.winner="The winner is Player 0";
         this.player="-";
         this.winnerstat=true;
       }
       else if(this.countwin1>=4){
         this.winner="The winner is Player 1";
         this.player="-";
         this.winnerstat=true;
       }

     }
   }
   
}


