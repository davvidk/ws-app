import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';


const routes: Routes = [
    {
        path: '',
        component: BookComponent,
        children: [{
            path: '',
            component: BookListComponent
            }, {
            path: ':isbn',
            component: BookDetailComponent
        }
        ]
    }
];

export const routing = RouterModule.forChild(routes);
