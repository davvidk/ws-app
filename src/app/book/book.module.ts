import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

import { BookDataService } from './shared/book-data.service';
import { routing } from './book.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  providers: [BookDataService],
  declarations:
  [BookComponent,
    BookListComponent,
    BookDetailComponent
  ]
})
export class BookModule { }
