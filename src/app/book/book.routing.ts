import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookComponent } from './book.component';
import { BookNewComponent } from './book-new/book-new.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { ConfirmCandeactivateGuardService } from './shared/confirm-candeactivate-guard.service';


const routes: Routes = [
    {
        path: '',
        component: BookComponent,
        children: [
            {
                path: '',
                component: BookListComponent
            },
            {
                path: 'new',
                component: BookNewComponent
            },
            {
                path: ':isbn',
                component: BookDetailComponent,
                canDeactivate: [ConfirmCandeactivateGuardService]
            },
            {
                path: ':isbn/edit',
                component: BookEditComponent
            }
        ]
    }
];

export const routing = RouterModule.forChild(routes);
