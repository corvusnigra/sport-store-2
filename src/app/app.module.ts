import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StaticDataSource} from "./model/static.datasource";
import {ProductRepository} from "./model/product.repository";
import {StoreModule} from "./store/store.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        StoreModule
    ],
    providers: [
        ProductRepository,
        StaticDataSource
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
