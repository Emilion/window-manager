import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WMWindowContainer} from './src/ngx-window-manager.directive';
import {WMWindow} from './src/ngx-window-manager.component';
import {WMDraggable} from "./src/events/draggable";
import {WindowManagerChild} from "./src/ek.window-mng-child.directive";

// export function translateLoaderFactory(http: Http) {
//     return new TranslateStaticLoader(http);
// }

@NgModule({
    imports: [CommonModule],
    declarations: [
        WMWindow,
        WMWindowContainer,
        WindowManagerChild,
        WMDraggable
    ],
    exports: [
        WMWindow,
        WMWindowContainer
    ]
})
export class WindowManagerModule {
    constructor() {
        console.log('loaded!');
    }
}
