var Message = /** @class */ (function () {
    function Message(messageId, senderMail, senderName, messageBody, messageSubject, messageDateReceived, receivers, acknowledge, daysDifference) {
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
    return Message;
}());
export { Message };
//# sourceMappingURL=message.js.map