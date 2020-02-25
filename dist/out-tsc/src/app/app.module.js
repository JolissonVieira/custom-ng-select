import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CipiSelectModule } from './cipi-select/cipi-select.module';
import { TesteEnvioDadosComponent } from './teste-envio-dados/teste-envio-dados.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            TesteEnvioDadosComponent
        ],
        imports: [
            BrowserModule,
            CipiSelectModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map