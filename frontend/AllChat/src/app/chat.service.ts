import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  messages: string[] = [];
  api: string = "http://localhost:4200/chat";

  constructor(private httpClient: HttpClient) { }

  getMessages(): Observable<any> {
    return this.httpClient.get(this.api + "/getMessages");
  }

  sendMessages(message: string): void {
    this.httpClient.post(this.api + "/sendMessage", message);
  }
}
