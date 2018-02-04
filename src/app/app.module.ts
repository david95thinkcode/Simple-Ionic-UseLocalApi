import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http';
import { CodersPage } from '../pages/coders/coders';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CoderServiceProvider } from '../providers/coder-service/coder-service';
import { CoderInDbServiceProvider } from '../providers/coder-in-db-service/coder-in-db-service';

@NgModule({
  declarations: [
    MyApp,
    CodersPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CodersPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CoderServiceProvider,
    CoderInDbServiceProvider
  ]
})
export class AppModule {}
