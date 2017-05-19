import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { ConfirmCandeactivateGuardService } from './shared/confirm-candeactivate-guard.service';


const routes: Routes = [
    {
        path: '',
        component: BookComponent,
        children: [{
            path: '',
            component: BookListComponent
            }, {
            path: ':isbn',
            component: BookDetailComponent,
            canDeactivate: [ConfirmCandeactivateGuardService]
        }
        ]
    }
];

export const routing = RouterModule.forChild(routes);
