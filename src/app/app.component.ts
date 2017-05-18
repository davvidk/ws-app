import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title = 'app works!';
  public titleVar = 'This is my favorite book list';

  gotTitle(event: any) {
    console.log(event);
  }
}
