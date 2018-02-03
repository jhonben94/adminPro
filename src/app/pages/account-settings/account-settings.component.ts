import { Component, OnInit, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService, SharedService, SidebardService } from '../../services/service.index';
@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( @Inject (DOCUMENT) private _document, public _ajustes: SettingsService) {
  }
  ngOnInit() {
    this.colocarCheck();
  }
  cambiarColor(tema: string, link: any) {
    this.aplicarCheck( link );
    this._ajustes.aplicarTema( tema );
  }
  aplicarCheck(link: any) {
    const selectores: any = document.getElementsByClassName('selector');
    for (const item of selectores) {
      item.classList.remove('working');
    }
    link.classList.add('working');
  }
  colocarCheck() {
    const selectores: any = document.getElementsByClassName('selector');
    const tema = this._ajustes.ajustes.tema;
    for (const item of selectores) {
       if ( item.getAttribute('data-theme') === tema ) {
          item.classList.add('working');
          break;
       }
    }
  }
}
