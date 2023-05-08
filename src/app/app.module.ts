import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter.component';
import { MyComponentComponent } from './components/my-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    MyComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    MyComponentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
