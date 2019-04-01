import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import {MainLayoutRoutingModule} from './main-layout-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MainLayoutRoutingModule
  ],
  declarations: [MainLayoutComponent]
})
export class MainLayoutModule { }
