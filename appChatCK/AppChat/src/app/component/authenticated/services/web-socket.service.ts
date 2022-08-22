import { Injectable } from '@angular/core';
import { ChatMessageDto } from '../models/ChatMessageDto';
import { Router } from '@angular/router';

const CHAT_URL = 'ws://140.238.54.136:8080/chat/chat'

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  client: any

  constructor() {
    this.client = new WebSocket(CHAT_URL)
    this.client.onopen = () => {
      console.log('Connected to server');
    }
  }
  login(data: any): void {
    this.client.send(JSON.stringify(data))
  }
}