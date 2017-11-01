import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { YagaModule } from '@yaga/leaflet-ng2';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
        YagaModule,
		BrowserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
