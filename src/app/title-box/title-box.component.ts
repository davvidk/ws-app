import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.css']
})
export class TitleBoxComponent implements OnInit {

  @Input()
  public title: string;

  public var: string = "Hello";

  constructor() { }

  ngOnInit() {
  }

  @Output() titleClicked = new EventEmitter<string>();

  emitTitleClicked() {
    this.titleClicked.emit('EventData');
  }

}