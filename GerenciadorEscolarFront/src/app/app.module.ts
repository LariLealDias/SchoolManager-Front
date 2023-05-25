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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SelectResourceComponent,
    HomeComponent,
    GetResourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    SelectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
