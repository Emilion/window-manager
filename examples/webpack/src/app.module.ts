import {BrowserModule} from "@angular/platform-browser";
import {Ng2WindowManagerModule} from "ng2-window-manager";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";

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
