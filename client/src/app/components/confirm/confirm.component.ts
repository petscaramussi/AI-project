import { _isNumberValue } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.sass']
})
export class ConfirmComponent implements OnInit {

  nome = localStorage.getItem('nomeUser');
  pizza = localStorage.getItem('pedidoUser');
  bebida = localStorage.getItem('bebidaUser');

  isNaN = false;

  bebidasSoma = 0;
  pizzaSoma = 0;

  constructor(private snackBar: MatSnackBar, 
                private _router: Router) {}
  
  
  ngOnInit(): void{
    //this.getPizzaNames()
  }

  getPizzas(): any{

    //regra pizza

    // 1 - Mussarela - 30 | 2 - Calabresa - 40| 3 - Frango - 35 | 4 - Vegetais - 32

      var pizzaNome: any = this.pizza?.split(',').map(function(item) {
        return parseInt(item, pizzaNome?.length);
      });




      for(let i = 0; i < pizzaNome.length; i++){
        if(pizzaNome[i] == 1) pizzaNome[i] = {tipo: 'Mussarela', preco: 30};
        else if(pizzaNome[i] == 2) pizzaNome[i] = {tipo: 'Calabresa', preco: 40};
        else if(pizzaNome[i] == 3) pizzaNome[i] = {tipo: 'Frango', preco: 35};
        else if(pizzaNome[i] == 4) pizzaNome[i] = {tipo: 'Vegetais', preco: 32};
      }

      console.log(pizzaNome);

      this.pizzaSoma = pizzaNome;

      return pizzaNome;

  }

  getBebidas(): any{

    var bebidaNome: any = this.bebida?.split(',').map(function(item) {
      return parseInt(item, bebidaNome?.length);
    });    

    for(let i = 0; i < bebidaNome.length; i++){
      if (bebidaNome[i] == 0) {bebidaNome[i] = {tipo: 'Nada', preco: 0}; this.isNaN = true}
      else if(bebidaNome[i] == 1) bebidaNome[i] = {tipo: 'Suco', preco: 4};
      else if(bebidaNome[i] == 2) bebidaNome[i] = {tipo: 'Cerveja', preco: 6};
      else if(bebidaNome[i] == 3) bebidaNome[i] = {tipo: 'Vinho', preco: 10};
    }

    console.log(bebidaNome);


    return bebidaNome;

  }


  getTotal(): any{
    let sumBebidas: any = this.getBebidas().map((item: { preco: any; }) => item.preco).reduce((prev: any, curr: any) => prev + curr, 0);
    console.log(sumBebidas);

    let sumPizzas: any = this.getPizzas().map((item: { preco: any; }) => item.preco).reduce((prev: any, curr: any) => prev + curr, 0);
    console.log(sumPizzas);

    

    let soma = sumBebidas + sumPizzas;

    return soma;
    
  }

  confirmMessage(){
    this.snackBar.open('Redirecionando para pagamento', 'X', {
      duration: 2000,
      verticalPosition: "top"
    });

    setTimeout(() => {
      this._router.navigate(['/payment']);
  }, 1000);
  }

  redirectChat(){
    this._router.navigate(['']);
  }


}
