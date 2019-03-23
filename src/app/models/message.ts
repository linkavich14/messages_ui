export class Message {
  public messageId: number;
  public senderMail: string;
  public senderName: string;
  public messageBody: string;
  public messageSubject: string;
  public messageDateReceived: string;
  public receivers: string [];
  public acknowledge: boolean;
  public daysDifference: number;

  constructor(messageId: number, senderMail: string, senderName: string, messageBody: string,
              messageSubject: string, messageDateReceived: string, receivers: string [], acknowledge: boolean, daysDifference: number) {
      this.acknowledge = acknowledge;
      this.messageId = messageId;
      this.senderMail = senderMail;
      this.senderName = senderName;
      this.messageBody = messageBody;
      this.messageSubject = messageSubject;
      this.messageDateReceived = messageDateReceived;
      this.receivers = receivers;
      this.daysDifference = daysDifference;
  }
}
