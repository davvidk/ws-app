import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

const routes: Routes = [
    {
        path: 'books',
        component: BookListComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/books'
    },
    {   path: 'books/:isbn',
        component: BookDetailComponent 
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
