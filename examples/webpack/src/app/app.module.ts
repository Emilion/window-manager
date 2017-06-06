import {BrowserModule} from "@angular/platform-browser";
import {WindowManagerModule} from "ngx-window-manager";
import {NgModule} from "@angular/core";
import {FormsModule } from '@angular/forms';
import {AppComponent} from "./app.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        WindowManagerModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}
