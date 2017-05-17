import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mouse-cursor',
  templateUrl: './mouse-cursor.component.html',
  styleUrls: ['./mouse-cursor.component.css']
})
export class MouseCursorComponent implements OnInit {

  public x: number;
  public y: number;

  constructor() { }

  ngOnInit() {
  }

  mouseMove( event : MouseEvent ) : void  {
    this.x = event.clientX;
    this.y = event.clientY;
  }
  
}
