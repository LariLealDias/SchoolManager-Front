import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SelectResourceComponent } from './components/select-resource/select-resource.component';
import { HomeComponent } from './pages/home/home.component';
import { GetResourceComponent } from './pages/get-resource/get-resource.component';
import { SelectService } from './service/Data/select-resource/select.service';
import { HttpClientModule } from '@angular/common/http';
import { ResourceComponent } from './components/resource/resource.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SelectResourceComponent,
    HomeComponent,
    GetResourceComponent,
    ResourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    SelectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
