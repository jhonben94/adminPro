import { Component, OnInit, OnDestroy } from '@angular/core';
import { setInterval, clearInterval } from 'timers';
import { error } from 'util';
import { Observable } from 'rxjs/RX';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
   suscripcion: Subscription;
  constructor() {
   this.suscripcion = this.regresaObservable()
      .subscribe(
      numero => console.log( 'Subs: ', numero ),
      errorL => console.error( errorL ),
      () => console.log('Termino el observador..')
    );
  }

  ngOnInit() {
  }
  ngOnDestroy () {
    console.log('La pagina se va cerrar');
    this.suscripcion.unsubscribe();
  }
  regresaObservable (): Observable <any>  {
   let contador = 0;
   return  new Observable( observer => {
        const intervalo = setInterval( () => {
          contador += 1;
          const salida = {
            valor: contador
          };
          observer.next( salida );
        /*  if (contador === 2) {
            observer.error( 'Auxiliooo... ' );
          } */
          if (contador === 3) {
              clearInterval( intervalo );
              observer.complete();
          }
        }, 500);
    })
   // .retry(2)
    .map( (resp: any) => {
      return resp.valor;
    })
    .filter( (valor, index) => {
     // console.log('Filter', valor, index);
      if (valor % 2 === 0 ) {
        // par
        return false;
      } else {
        // impart
        return true;
      }
      // return true;
    });

  }

}
