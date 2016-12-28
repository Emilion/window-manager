import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Ng2WindowManager} from './src/ng2-window-manager.module';
import {NG2WMWindowContainer} from './src/ng2-window-manager.directive';
import {NG2WMWindow} from './src/ng2-window-manager.component';

export * from './src/ng2-window-manager.module';
export * from './src/ng2-window-manager.directive';
export * from './src/ng2-window-manager.component';

// export function translateLoaderFactory(http: Http) {
//     return new TranslateStaticLoader(http);
// }

@NgModule({
    imports: [CommonModule, Ng2WindowManager],
    declarations: [
        NG2WMWindow,
        NG2WMWindowContainer
    ],
    exports: [
        NG2WMWindow,
        NG2WMWindowContainer
    ]
})
export class Ng2WindowManagerModule {
    constructor() {
        console.log('loaded!')
    }
}
