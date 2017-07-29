import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddFriendPage } from '../add-friend/add-friend';
import { Storage } from '@ionic/storage';
import { FriendsProvider } from '../../providers/friends/friends';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private storage: Storage, private friendsService: FriendsProvider) {

  }

  addFriend() {
    this.navCtrl.push(AddFriendPage);
  }

  clear() {
    this.friendsService.checkedFriends = [];
    this.friendsService.initFriends();
  }

}