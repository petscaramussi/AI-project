import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  goToPix(){
    this._router.navigate(['/pix']);
  }

  gotoPayEntrega(){
    this._router.navigate(['/pay-entrega']);
  }

}
