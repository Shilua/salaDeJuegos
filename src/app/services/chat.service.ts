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

  

  usuario: any = localStorage.getItem("usuario");
  id: any = localStorage.getItem("id");
  currentUser: User = new User();
 
  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private user :User) {
    
  }

 
  // TODO Chat functionality
  addChatMessage(msg:any,colection:any) {
    let fecha = new Date().getTime();
    return this.afs.collection(colection).add({
      msg: msg,
      from: this.id,
      fromName: this.usuario,
      createdAt: fecha
    });
  }
   
  getChatMessages(collection:any) {
    let users = [];
    return this.getUsers().pipe(
      switchMap(res => {
        users = res;
        return this.afs.collection(collection, ref => ref.orderBy('createdAt')).valueChanges({ idField: 'id' }) as Observable<Message[]>;
      }),
      map(messages => {
        // Get the real name for each user
        for (let m of messages) {
          m.myMsg = this.id === m.from;
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
