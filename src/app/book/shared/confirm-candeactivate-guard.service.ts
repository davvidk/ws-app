import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { BookListComponent} from '../book-list/book-list.component';


@Injectable()
export class ConfirmCandeactivateGuardService implements CanDeactivate<BookListComponent> {

  constructor() { }

  canDeactivate(booklistComponent:BookListComponent,  route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
     return confirm('Are you sure?');
  }
}
