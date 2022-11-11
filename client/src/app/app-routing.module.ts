import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { PayEntregaComponent } from './components/pay-entrega/pay-entrega.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PixComponent } from './components/pix/pix.component';


const routes: Routes = [
  {
    path: '',
    component: ChatComponent
  },
  {
    path: 'confirm',
    component: ConfirmComponent,
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'pix',
    component: PixComponent
  },
  {
    path: 'pay-entrega',
    component: PayEntregaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
