import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { ConfirmCandeactivateGuardService } from './shared/confirm-candeactivate-guard.service';


import { BookDataService } from './shared/book-data.service';
import { routing } from './book.routing';
import { BookEditComponent } from './book-edit/book-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  providers: [
    BookDataService,
    ConfirmCandeactivateGuardService,
    ],
  declarations:
  [BookComponent,
    BookListComponent,
    BookDetailComponent,
    BookEditComponent
  ]
})
export class BookModule { }
