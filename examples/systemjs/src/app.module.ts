import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Ng2WindowManager} from '../node_modules/ng2-window-manager';
import {AppComponent} from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        Ng2WindowManager
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
