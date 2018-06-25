import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { FoorterComponent } from './foorter/foorter.component';
import { ListFooterComponent } from './list-footer/list-footer.component';
import { DataService } from './data.service';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeZh from '@angular/common/locales/zh';

registerLocaleData(localeZh);


@NgModule({
  // All the componen gonna be used in the module
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
    BrowserModule,
    FormsModule
  ],

  // All the service gonna be used in the project
  providers: [DataService],

  bootstrap: [AppComponent]
})
export class AppModule { }
