import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the FriendsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FriendsProvider {

  /** Indicates the list of friends */
  friends: any = [];
  checkedFriends: any = [];

  constructor() {
    console.log('Hello FriendsProvider Provider');
    this.initFriends();
  }

  public initFriends() {
    this.friends = [
      { name: "Kyle", checked: false },
      { name: "Alyssa", checked: false },
      { name: "Jack", checked: false },
      { name: "Alice", checked: false },
      { name: "Bob", checked: false },
      { name: "Charles", checked: false },
      { name: "Jacob", checked: false }
    ];
  }



}
