import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule, MatIconModule} from '@angular/material';

import {AuthLayoutRoutingModule} from './auth-layout-routing.module';
import {AuthLayoutComponent} from './auth-layout.component';

@NgModule({
    imports: [
        CommonModule,
        AuthLayoutRoutingModule,
        MatCardModule, MatIconModule
    ],
    declarations: [AuthLayoutComponent]
})
export class AuthLayoutModule {
}
