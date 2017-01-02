import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import * as windowLibrary from './src/index';

// export function translateLoaderFactory(http: Http) {
//     return new TranslateStaticLoader(http);
// }

@NgModule({
    imports: [CommonModule],
    declarations: [
        windowLibrary.NG2WMWindow,
        windowLibrary.NG2WMWindowContainer,
        windowLibrary.WindowManagerChild,
        windowLibrary.WMDraggable
    ],
    exports: [
        windowLibrary.NG2WMWindow,
        windowLibrary.NG2WMWindowContainer
    ]
})
export class Ng2WindowManagerModule {
    constructor() {
        console.log('loaded!');
    }
}
