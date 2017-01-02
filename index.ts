import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NG2WMWindowContainer} from './src/ng2-window-manager.directive';
import {NG2WMWindow} from './src/ng2-window-manager.component';
import {WMDraggable} from "./src/events/draggable";
import {WindowManagerChild} from "./src/ek.window-mng-child.directive";

// export function translateLoaderFactory(http: Http) {
//     return new TranslateStaticLoader(http);
// }

@NgModule({
    imports: [CommonModule],
    declarations: [
        NG2WMWindow,
        NG2WMWindowContainer,
        WindowManagerChild,
        WMDraggable
    ],
    exports: [
        NG2WMWindow,
        NG2WMWindowContainer
    ]
})
export class Ng2WindowManagerModule {
    constructor() {
        console.log('loaded!');
    }
}
