class Message {
    constructor(authorName,  MessageText){
       this.authorName = authorName
       this.time = new Date()
       this.text = MessageText
    }   
    toString(){
        let hourStr = this.time.getHours() > 9 ? this.time.getHours() : `0${this.time.getHours()}`;
        let minuteStr = this.time.getMinutes() > 9 ? this.time.getMinutes() : `0${this.time.getMinutes()}`;

        return `${hourStr}:${minuteStr} ${this.authorName} : ${this.text}`;
    }
}
class Messenger {
    constructor() {
        this._messages = [];
    }
 send(author, text){
    let message = new Message(author, text)
    this._messages.push(message.toString())
 }
 showhistory(){
    for (let i in this._messages) {
        console.log(this._messages[i].toString());
 }
 }}
 let messenger = new Messenger()
messenger.send('Ismail', 'salam')
messenger.send('Turan', 'əlöykümə salam')
messenger.showhistory()