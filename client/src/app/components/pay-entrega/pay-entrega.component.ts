import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay-entrega',
  templateUrl: './pay-entrega.component.html',
  styleUrls: ['./pay-entrega.component.sass']
})
export class PayEntregaComponent implements OnInit {

  endereco = localStorage.getItem("enderecoUser")


  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  redirectChat(){
    this._router.navigate(['']);
  }

}
