import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {Book} from '../shared/book';


@Component({
  selector: 'book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {

  form: FormGroup;

  book: Book; 

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group(
      {
        title: ['', Validators.required],
        isbn: ['', Validators.compose([Validators.required, Validators.minLength(11)])],
        author: ['', Validators.compose([Validators.required, Validators.minLength(1)])]
      });
  }

  ngOnInit() {
  
  }

  onSubmit(){
    console.log("Submit new book")
  }

}
