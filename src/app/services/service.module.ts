import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService, SharedService, SidebardService } from './service.index';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
     SettingsService,
     SharedService,
     SidebardService],
  declarations: []
})
export class ServiceModule { }
