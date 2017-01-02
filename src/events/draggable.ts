import {Directive, ElementRef, HostListener, OnInit, Input} from "@angular/core";
@Directive({
    selector: '[wm-draggable]'
})
export class WMDraggable implements OnInit {
    /**
     *
     * @param element
     */
    constructor(private element: ElementRef) {}

    /**
     *
     * @param val
     */
    @Input('[wm-drag-disabled]') set disabled(val:boolean) {
        this._disabled = val;
        if(this._disabled) {
            this.element.nativeElement.className = this.element.nativeElement.className.replace(' wd-drag-cursor', '');
        } else {
            this.element.nativeElement.style.className += ' wm-drag-cursor';
        }
    }

    private startTopPoint:number = 0;
    private startLeftPoint:number = 0;
    private isMouseDown:boolean;
    private _disabled:boolean;

    ngOnInit(): void {
        this.element.nativeElement.style.position = 'relative';
        this.element.nativeElement.style.className += ' wm-drag-cursor';
    }

    @HostListener('mousedown', ['$event']) onMouseDown(event: MouseEvent) {
        this.isMouseDown = true;
        console.log('mousedown');
        this.startTopPoint = event.clientY - this.element.nativeElement.style.top.replace('px', '');
        this.startLeftPoint = event.clientX - this.element.nativeElement.style.left.replace('px', '');
    }
    @HostListener('mousemove', ['$event'])
    onMouseMove(event: MouseEvent) {
        if(this.isMouseDown) {
            this.element.nativeElement.style.top = (event.clientY - this.startTopPoint) + 'px';
            this.element.nativeElement.style.left = (event.clientX - this.startLeftPoint) + 'px';
        }
    }
    @HostListener('mouseup', ['$event'])
    onMouseUp(event: MouseEvent) {
        this.isMouseDown = false;
    }
}