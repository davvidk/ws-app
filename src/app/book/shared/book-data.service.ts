import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class BookDataService {

  constructor(private http: Http) { }

  getBooks(): Observable<Book[]> {
    return this.http.get('http://localhost:4730/books').map(response => response.json());
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.http.get(`http://localhost:4730/books/${isbn}`).map(response => response.json());
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post('http://localhost:4730/books', book).map(response => response.json());
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put('http://localhost:4730/books/'+book.isbn, book).map(response => response.json());
  }
}
