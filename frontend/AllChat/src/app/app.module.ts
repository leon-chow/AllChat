import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ChatComponent } from './chat/chat.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { TextFieldModule } from '@angular/cdk/text-field';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ChatComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    TextFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
