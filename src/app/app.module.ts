import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProductdataService} from './productdata.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroimageComponent } from './heroimage/heroimage.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroimageComponent,
    SidenavComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
