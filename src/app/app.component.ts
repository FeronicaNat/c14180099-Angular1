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
   cekh=1;
   cekv=1;
  //  brs:number;
  //  klm:number;
   
  

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

  //  changePlayer(){
  //    if(this.winnerstat==false){
  //      if(this.baris>0 &&this.baris<=5&&this.kolom>0&&this.kolom<=5){
  //        if(this.board[this.baris][this.kolom]=="*"){
  //          this.board[this.baris][this.kolom]=this.player;
  //          this.checkWinner(this.baris,this.kolom);
  //          if(this.player=="1"){
  //            this.player="0";
  //          }
  //          else if(this.player=="0"){
  //            this.player="1";
  //          }
           
  //        }
  //        else{
  //          alert("Baris dan kolom tersebut sudah diisi");
  //        }
  //      }
  //      else if(this.baris<0){
  //        alert("Baris tidak boleh kurang dari 1");
  //      }
  //      else if(this.baris>5){
  //        alert("Baris tidak boleh lebih dari 5");
  //      }
  //      else if(this.kolom<0){
  //        alert("Kolom tidak boleh kurang dari 1")
  //      }
  //      else if(this.kolom>5){
  //        alert("Kolom tidak boleh lebih dari 5")
  //      }
  //      else{
  //        alert("Baris atau kolom tidak sesuai")
  //      }
    
  //    }
  //  }
  
    changePlayer(){
      if(this.winnerstat==false){
        if(this.board[this.baris][this.kolom]=="*"){
          if(this.baris>0 &&this.baris<=5&&this.kolom>0&&this.kolom<=5){
            this.board[this.baris][this.kolom]=this.player;
            this.checkWinner(this.baris,this.kolom);
            if(this.player=="1"){
              this.player="0";
            }
            else if(this.player=="0"){
              this.player="1";
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
        else{
          alert("Baris dan kolom tersebut sudah diisi");
        }
      }
    }

   checkWinner(baris,kolom){

     var jumhoriz=1;
     var jumver=1;

     //11 21 31 41 51
     //cek baris keatas
     
     var vb=baris-1;
     while(vb>=1){
       if(this.board[vb][kolom]==this.player){
         jumver+=1;
       }
       else{
         vb=0;
       }
       vb-=1;
     }

     //cek baris kebawah
     vb=baris+1;
     while(vb<=5){
       if(this.board[vb][kolom]==this.player){
         jumver+=1;
       }
       else{
         vb=6;
       }
       vb+=1;
     }

     //11 12 13 14 15
     //cek kolom kekiri
     var vk=kolom-1;
     while(vk>=1){
       if(this.board[baris][vk]==this.player){
         jumhoriz+=1;
       }
       else{
         vk=0;
       }
       vk-=1;
     }
     
     //cek kolom kekanan
     vk=kolom+1;
     while(vk<=5){
       if(this.board[baris][vk]==this.player){
         jumhoriz+=1;
       }
       else{
         vk=6;
       }
       vk+=1;
     }

     if(jumver>=4 || jumhoriz>=4){
         this.winner="Congrats! The winner is Player "+this.player;
         this.player="-";
         this.winnerstat=true;
     }
   }
   
}


