import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  api: string = "http://localhost:4200/chat";

  constructor(private httpClient: HttpClient) { }

  getMessages(): Observable<any> {
    return this.httpClient.get(this.api + "/getMessages");
  }

  sendMessage(message: any): void {
    console.log("sending message: ", message);
    this.httpClient.post(this.api + "/addMessage", message, {
      params: new HttpParams()
      .set('username', message.username)
      .set('message', message.message)}).subscribe();
  }
}
