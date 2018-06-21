import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { FoorterComponent } from './foorter/foorter.component';
import { ListFooterComponent } from './list-footer/list-footer.component';


@NgModule({
  // All the componen gonna be used in the project
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    FoorterComponent,
    ListFooterComponent
  ],

  // All the module gonna be used in the project,
  // usually will be module provided by angular or 3rd party module. (NgxPermissionsModule, GM, HttpClientModule etc)
  imports: [
    BrowserModule
  ],

  // All the service gonna be used in the project
  providers: [],

  // Only the root module will use bootstrap
  bootstrap: [AppComponent]
})
export class AppModule { }
