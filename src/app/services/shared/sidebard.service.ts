import { Injectable } from '@angular/core';

@Injectable()
export class SidebardService {
    menu: any = [{
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        {
          titulo: 'Dashboard',
          url: '/dashboard'
        },
        {
          titulo: 'ProgressBar',
          url: '/progress'
        }
        ,
        {
          titulo: 'Graficas',
          url: '/graficas'
        },
        {
          titulo: 'Promesas',
          url: '/promesas'
        },
        {
          titulo: 'RXJS',
          url: '/rxjs'
        }

      ]
    }];
  constructor() { }

}
