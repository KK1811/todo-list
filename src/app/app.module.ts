import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './home/index/index.component';
import { AllnotesComponent } from './home/allnotes/allnotes.component';
import { AddnoteComponent } from './home/addnote/addnote.component';
import { SinglenoteComponent } from './home/allnotes/singlenote/singlenote.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    HomeComponent,
    IndexComponent,
    AllnotesComponent,
    AddnoteComponent,
    SinglenoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
