import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OrderViewerComponent } from './keypad/order-viewer/order-viewer.component';
import { ConfigManagerComponent } from './keypad/config-manager/config-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderViewerComponent,
    ConfigManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
