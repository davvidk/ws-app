import { Component, OnInit } from '@angular/core';
import { BookDataService } from './../shared/book-data.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../shared/book';
import { Subscription } from 'rxjs/subscription'


@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  private subscription: Subscription;

  private book: Book;
  constructor(private route: ActivatedRoute, private bookData: BookDataService) { }

  ngOnInit() {
    this.route.params.subscribe((params: { isbn: string }) => {
      console.log('ISBN:', params.isbn)
      this.bookData.getBookByIsbn(params.isbn).subscribe(book => this.book = book);
    });
    // In der Musterlösung mit einer Mergemap. Ermöglicht die UnSubscribtion beider Observerables
  }

  save(book: Book) {
    this.subscription = this.bookData.addBook(book).subscribe(book => console.log('book.saved: ', book.title));
    console.log("Submit new book: ", book);
  }
}
