import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/classes/user';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: Observable<any[]>;
  newMsg:string = '';
  user: User = new User();
  constructor(
    private chatSvc: ChatService, 
    private authSvc :AuthService
  ) {
      this.messages = new Observable<any[]>();
   }

  ngOnInit(): void {
      let email = JSON.stringify(localStorage.getItem('email'));
      console.log(email);
      this.user.email = email;
      this.user.uid = email;
      this.messages = this.chatSvc.getChatMessages(this.user);
  }

  sendMessage() {
    this.chatSvc.addChatMessage(this.newMsg,this.user).then(() => {
      this.newMsg = '';
      //this.content.scrollToBottom();
    });
  }

}
