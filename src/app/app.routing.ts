import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/books'
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);



