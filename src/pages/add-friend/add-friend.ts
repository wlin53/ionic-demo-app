import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FriendsProvider } from '../../providers/friends/friends';

/**
 * Generated class for the AddFriendPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-friend',
  templateUrl: 'add-friend.html',
})
export class AddFriendPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private storage: Storage, private friendsService: FriendsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddFriendPage');
  }

  add() {
    this.friendsService.checkedFriends = this.friendsService.friends.filter((friends) => {
      return friends.checked == true;
    });
    this.navCtrl.pop();
  }

}
