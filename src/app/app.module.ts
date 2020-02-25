import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CipiSelectComponent } from './cipi-select/cipi-select.component';
import { CipiSelectModule } from './cipi-select/cipi-select.module';
import { TesteEnvioDadosComponent } from './teste-envio-dados/teste-envio-dados.component';
import { TesteEnvioDadosModule } from './teste-envio-dados/teste-envio-dados.module';


@NgModule({
  declarations: [
    AppComponent,
    TesteEnvioDadosComponent,
    CipiSelectComponent
   ],
  imports: [
    BrowserModule,
    CipiSelectModule,
    TesteEnvioDadosModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
