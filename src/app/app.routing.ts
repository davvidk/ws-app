import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/books'
    },
    {   path: 'books',
        loadChildren: './book/book.module#BookModule' 
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);



