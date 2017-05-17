import { Component, OnInit } from '@angular/core';
import { Book } from './../shared/book';
import { BookDataService } from './../shared/book-data.service';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private bookData: BookDataService) { }

  public books: Book[];
  
  ngOnInit() {
      this.books = this.bookData.getBooks();
  }
  
}
