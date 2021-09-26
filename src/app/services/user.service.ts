import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) { }
  getElements(){
    return this.firestore.collection('user').ref;
  }
  createElement(user: User){
    var data = {
      email : user.email,
      uid : user.email
    }
    this.firestore.collection('user').doc(data.uid).set(data);
  }
}
