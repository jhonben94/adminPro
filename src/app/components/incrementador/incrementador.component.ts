import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { element } from 'protractor';
@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild ('txtPorcentaje') txtPorcentaje: ElementRef;
  @Input() leyenda: string  = 'Leyenda';
  @Input() porcentaje: number = 50;

  // tslint:disable-next-line:no-output-rename
  @Output('actualizaValor') cambioValor: EventEmitter <number> = new EventEmitter;
  constructor() {
   }

  ngOnInit() {
  }
  onChange( newValue: number) {
   // const elementHTML: any = document.getElementsByName('porcentaje')[0];
   // console.log( this.txtPorcentaje );
    console.log(newValue);
    if (newValue >= 100 ) {
      this.porcentaje = 100;
    } else if ( newValue <= 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = newValue;
    }
    this.txtPorcentaje.nativeElement.value = this.porcentaje;
   // elementHTML.value =  Number (this.porcentaje);
    this.cambioValor.emit( this.porcentaje );
  }

  cambiarValor( valor: number ) {
    this.porcentaje += valor;
    if ( this.porcentaje > 100) {
      this.porcentaje = 100;
      return;
    } else if ( this.porcentaje <= 0 ) {
      this.porcentaje = 0;
      return;
    }
    this.cambioValor.emit( this.porcentaje );
    this.txtPorcentaje.nativeElement.focus();
  }
}
