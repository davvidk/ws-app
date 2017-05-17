import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  vars = 'This is my title var';

  public color = "papaya";

    gotTitle(event: any) {
    console.log(event);
    }
}
