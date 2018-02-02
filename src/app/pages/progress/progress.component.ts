import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html'
})
export class ProgressComponent implements OnInit {
  porcentajeAzul: number = 60;
  porcentajeAmarillo: number = 40;
  flag: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  // actualizarProgreso( event: number, variable) {
  //     console.log('Event', event);
  //     this.porcentajeAzul = event;
  // }

}
