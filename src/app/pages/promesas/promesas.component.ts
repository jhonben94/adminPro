import { Component, OnInit } from '@angular/core';
import { clearInterval } from 'timers';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    console.log('Promesa inicializada');
  this.contarTres().then(
     mensaje => console.log('Termino', mensaje)
  ).catch(
    error => console.error('Error en la promesa', error));
   }

  ngOnInit() {
  }
  contarTres(): Promise < boolean > {
    let contador =   0;
    return  new Promise ( (resolve, reject) => {
      const interval = setInterval( () => {
        contador += 1;
        if ( contador === 3) {
          console.log('LLamando al resolve() ');
          resolve( true );
          // reject( 'Erro al inicializar' );
            clearInterval(interval);
        }
      }, 1000);
    }
    );

  }
}
