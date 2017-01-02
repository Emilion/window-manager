import {Injectable} from "@angular/core";
import {WindowConfig} from "./wm-window-config";
@Injectable()
export class WindowMangerService {

    private static windowArray: WindowConfig[] = [];

    constructor() {

    }

    public static addWindow(window: WindowConfig) {
        window.index = WindowMangerService.windowArray.length;
        WindowMangerService.windowArray.push(window);
    }
    public static log() {
        console.log(WindowMangerService.windowArray);
    }
}