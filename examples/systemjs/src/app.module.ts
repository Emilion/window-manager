import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Ng2WindowManagerModule} from 'ng2-window-manager';
import {AppComponent} from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        Ng2WindowManagerModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
