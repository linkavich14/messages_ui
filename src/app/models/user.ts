import { Message } from './message';

export class User {
  userId: number;
  userName: string;
  messagesReceived: Message [];

  constructor(userId: number, userName: string, messagesReceived: Message []) {
    this.userId = userId;
    this.userName = userName;
    this.messagesReceived = messagesReceived;
  }

}
