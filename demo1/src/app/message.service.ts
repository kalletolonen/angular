import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  messages: string[] = [];  //initializes a list of strings as messsages

  add(message: string) {  //add-method to add a given props string to the messages list
    this.messages.push(message)
  }

  clear() {
    this.messages = []; //replaces the messages wqith an empty list
  }

}
