import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CountComponent } from './count/counting.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,CountComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
