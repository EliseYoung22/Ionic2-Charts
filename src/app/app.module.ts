import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { D3Page } from '../pages/d3/d3';
import { HeatmapPage } from '../pages/heatmap/heatmap';
import { StatsPage } from '../pages/stats/stats';

import { ChartModule } from 'angular2-highcharts';
import * as Highcharts from 'Highcharts';
import { GithubServiceProvider } from '../providers/github-service/github-service';

declare var require: any;

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    D3Page,
    HeatmapPage,
    StatsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp), 
    ChartModule.forRoot(
    require('Highcharts'),
    require('../../node_modules/highcharts/highcharts-more.js'),require('highcharts/modules/exporting'),
    ),
     HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, 
    D3Page,
    HeatmapPage,
    StatsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GithubServiceProvider
  ]
})
export class AppModule {}
