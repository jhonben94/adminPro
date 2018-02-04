import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import 'rxjs/RX';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/RX';
import { Event } from '@angular/router/src/events';
import { Title , Meta, MetaDefinition} from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: []
})
export class BreadcrumsComponent implements OnInit {
  label: string = '';
  constructor(private router: Router, public title: Title, public meta: Meta) {
      this.getDataRoute()
      .subscribe( (data: any) => {
        console.log(data  );
        this.label = data.titulo;
        this.title.setTitle ( this.label );
        let metaTag: MetaDefinition = {
          name: 'descripcion',
          content: this.label
        };

        this.meta.updateTag(metaTag);
      });

   }
   getDataRoute () {
    return this.router.events
          .filter ( (evento: ActivationEnd) => evento instanceof ActivationEnd )
          .filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null )
          .map( (evento: ActivationEnd) => evento.snapshot.data );
   }

  ngOnInit() {
  }

}
