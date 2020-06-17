import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { ChannelListComponent } from './components/channel-list/channel-list.component';
import { NavComponent } from './components/nav/nav.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { RateComponent } from './components/rate/rate.component';
import { FavouriteListComponent } from './components/favourite-list/favourite-list.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ChannelListComponent,
    NavComponent,
    VideoDetailsComponent,
    RateComponent,
    FavouriteListComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production, registrationStrategy: 'registerImmediately' }),

    AngularFireModule.initializeApp({
      apiKey: "AIzaSyA2jYWDq-Lm0ChLl5La1FD1UC8tZQ-JIFY",
      authDomain: "taskpwa-cbe2f.firebaseapp.com",
      databaseURL: "https://taskpwa-cbe2f.firebaseio.com",
      projectId: "taskpwa-cbe2f",
      storageBucket: "taskpwa-cbe2f.appspot.com",
      messagingSenderId: "576128016860",
      appId: "1:576128016860:web:96fdbb2a4f4aee43feaf19",
      measurementId: "G-9JF24JP0ZY"
    }),
    AngularFirestoreModule,
    AngularFirestoreModule.enablePersistence(),
    BrowserAnimationsModule,


    LayoutModule,
  
    FormsModule,
    NgbModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
