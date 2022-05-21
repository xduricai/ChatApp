import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatListModule } from '@angular/material/list'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TextFieldModule } from '@angular/cdk/text-field';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonComponent } from './components/person/person.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';

const material = [
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule
]

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    ChatWindowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TextFieldModule,
    ReactiveFormsModule,
    material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
