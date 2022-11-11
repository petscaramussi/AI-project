import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pix',
  templateUrl: './pix.component.html',
  styleUrls: ['./pix.component.sass'],
})
export class PixComponent implements OnInit {

  seconds = 59;
  minutes = 29;
  timeEnd = false;

  constructor(private snackBar: MatSnackBar
    ,private _router: Router) { }

  ngOnInit() {
    this.initTimer();
  }

  ngOnChanges(){
    
  }


  initTimer(){
    setInterval(() => {
      if(this.timeEnd == false){
      this.seconds--;
      if(this.seconds == 0){
        this.seconds = 59 ;
        this.minutes--
      }
    }
    },1000);
   
  }

  paymentGotConfirmed(){
    this.snackBar.open('Pagamento Confirmado', 'X', {
      duration: 2000,
      verticalPosition: "top"
    });
      this._router.navigate(['pay-entrega']);
  }

  redirectChat(){
    this._router.navigate(['']);
  }

  redirectPay(){
    this._router.navigate(['/payment']);
  }

}
