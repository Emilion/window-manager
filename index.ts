import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NG2WMWindowContainer} from './src/ngx-window-manager.directive';
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
        NG2WMWindowContainer,
        WindowManagerChild,
        WMDraggable
    ],
    exports: [
        WMWindow,
        NG2WMWindowContainer
    ]
})
export class Ng2WindowManagerModule {
    constructor() {
        console.log('loaded!');
    }
}
