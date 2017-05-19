import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {Book} from '../shared/book';
import { BookDataService } from './../shared/book-data.service';
import { Subscription } from 'rxjs/subscription'


@Component({
  selector: 'book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {

  form: FormGroup;

  private subscription: Subscription;

  constructor(private fb: FormBuilder, private bookData: BookDataService) { 
    this.form = this.fb.group(
    {
        title: ['', Validators.required],
        subtitle: ['', Validators.required],
        isbn: ['', Validators.compose([Validators.required, Validators.minLength(11)])],
        author: ['', Validators.compose([Validators.required, Validators.minLength(1)])]
    });
  }

  ngOnInit() {

  }

  onSubmit(){
    const {title, isbn, author, subtitle} = this.form.value; 
    const book: Book = {
      isbn: '',
      title,
      author, 
      subtitle: subtitle,
      abstract: '',
      numPages: 135,
      publisher: {
        name: '',
        url: ''
      }
    }

    console.log("Submit new book: ", book);
       this.subscription = this.bookData.addBook(book).subscribe(book => console.log('book.saved: ',book.title));
}

}
