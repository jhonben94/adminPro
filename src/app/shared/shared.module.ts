import { NgModule } from '@angular/core';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { HeaderComponent } from './header/header.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    declarations: [
        BreadcrumsComponent,
        HeaderComponent,
        PagenofoundComponent,
        SidebarComponent
    ],
    exports: [
        BreadcrumsComponent,
        HeaderComponent,
        PagenofoundComponent,
        SidebarComponent
    ],
    imports: [],
      providers: [],
      bootstrap: []

})
export class SharedModule {
}
