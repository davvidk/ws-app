import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from './../shared/book';
import { BookDataService } from './../shared/book-data.service';
import { Subscription } from 'rxjs/subscription'

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {

  constructor(private bookData: BookDataService) { }

  public books: Book[];
  private subscription: Subscription;

  ngOnInit() {
    this.subscription = this.bookData.getBooks().subscribe(books => this.books = books);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log("BookListComponent unsubscribed")
  }
}
