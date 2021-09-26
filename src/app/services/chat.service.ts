import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as firebase from 'firebase/app';
import 'firebase/firestore'
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../classes/user';

export interface Message {
  id: string;
  from: string;
  msg: string;
  fromName: string;
  myMsg: boolean;
}

@Injectable({
  providedIn: 'root'
})


export class ChatService {
 
  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    
  }

 
  // TODO Chat functionality
  addChatMessage(msg:any,user:User) {
    let fecha = new Date();
    return this.afs.collection('message').add({
      msg: msg,
      from: user.email,
      fromName: user.email,
      createdAt: fecha
    });
  }
   
  getChatMessages(user:User) {
    let users = [];
    return this.getUsers().pipe(
      switchMap(res => {
        users = res;
        return this.afs.collection('message', ref => ref.orderBy('createdAt')).valueChanges({ idField: 'id' }) as Observable<Message[]>;
      }),
      map(messages => {
        // Get the real name for each user
        for (let m of messages) {
          m.myMsg = user.email === m.from;
        }        
        return messages
      })
    )
  }
   
  private getUsers() {
    return this.afs.collection('users').valueChanges({ idField: 'uid' }) as Observable<User[]>;
  }
   
  private getUserForMsg(msgFromId: any, users: User[]): string {    
    for (let usr of users) {
      if (usr.uid == msgFromId) {
        return usr.email;
      }
    }
    return 'Deleted';
  }
}
