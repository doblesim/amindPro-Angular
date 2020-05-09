import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './login/login.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PogressComponent } from './pages/pogress/pogress.component';
import {NopagefoundComponent} from './shared/nopagefound/nopagefound.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcurmsComponent } from './shared/breadcurms/breadcurms.component';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,
    NopagefoundComponent,
    DashboardComponent,
    PogressComponent,
    Graficas1Component,
    HeaderComponent,
    SidebarComponent,
    BreadcurmsComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
