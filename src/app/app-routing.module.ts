import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {path: 'auth', loadChildren: './auth-layout/auth-layout.module#AuthLayoutModule'},
    {path: '', loadChildren: './main-layout/main-layout.module#MainLayoutModule'},
    {path: '**', redirectTo: '/auth/login'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
