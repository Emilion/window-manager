import {Directive, ElementRef, OnInit, Input, Renderer} from "@angular/core";
@Directive({
    selector: '[wm-draggable]'
})
export class WMDraggable implements OnInit {
    private virtualEle: any;
    //
    // private top: any;
    // private left: any;

    /**
     *
     * @param element
     * @param renderer
     */
    constructor(private element: ElementRef, public renderer: Renderer) {

    }

    /**
     * enable or disable dragging
     * @param val
     */
    @Input('wm-drag-disabled') set disabled(val: boolean) {
        this._disabled = val;
        if (this._disabled) {
            this.element.nativeElement.className = this.element.nativeElement.className.replace(' wd-drag-cursor', '');
        } else {
            this.element.nativeElement.className += ' wm-drag-cursor';
        }
    }

    private startTopPoint: number = 0;
    private startLeftPoint: number = 0;
    private isMouseDown: boolean;
    private _disabled: boolean;

    ngOnInit(): void {
        this.element.nativeElement.style.position = 'relative';
        this.element.nativeElement.className += ' wm-drag-cursor';
        // INIT VIRTUAL ELEMENT
        this.virtualEle = this.renderer.createElement(this.element.nativeElement, 'div');
        this.virtualEle.className += ' wm-virtual-comp wm-drag-cursor';
        this.virtualEle.style.border = '5px dotted #FF27C4';
        this.virtualEle.style.display = 'block';
        this.setVirtualDimension(this.element.nativeElement.clientWidth, this.element.nativeElement.clientHeight);
        // Init element top and left

        /**
         * TODO comments
         */
        this.draggingListener(this.element.nativeElement.children[0], false);
        this.draggingListener(this.virtualEle, true);
    }


    private draggingListener(ele: any, isVirtualEle: boolean) {
        let mousemove: MouseEvent;
        let mousedown: MouseEvent;
        if (!isVirtualEle) {
            this.renderer.listen(ele, 'mousedown', (event: MouseEvent) => {
                mousedown = event;
                this.isMouseDown = true;
                console.log('mousedown');
                this.startTopPoint = event.clientY - this.element.nativeElement.style.top.replace('px', '');
                this.startLeftPoint = event.clientX - this.element.nativeElement.style.left.replace('px', '');

                this.setVirtualPosition(isNaN(parseInt(this.element.nativeElement.style.top.replace('px', ''), 10)) ? 0 : parseInt(this.element.nativeElement.style.top.replace('px', ''), 10),
                    isNaN(parseInt(this.element.nativeElement.style.left.replace('px', ''), 10)) ? 0 : parseInt(this.element.nativeElement.style.left.replace('px', ''), 10));
                this.virtualEle.style.display = 'block';
            });
        } else {

            this.renderer.listen(ele, 'mousemove', (event: MouseEvent) => {
                if (this.isMouseDown) {
                    let top = (event.clientY - this.startTopPoint);
                    let left = (event.clientX - this.startLeftPoint);
                    this.setVirtualPosition(top, left);
                    mousemove = event;
                }
            });
            this.renderer.listen(ele, 'mouseup', (event: MouseEvent) => {
                this.isMouseDown = false;
                this.virtualEle.style.display = 'none';
                this.element.nativeElement.style.top = this.virtualEle.style.top;
                this.element.nativeElement.style.left = this.virtualEle.style.left;
                if (mousemove) {
                    mousemove.stopImmediatePropagation();
                }
                if (mousedown) {
                    mousedown.stopImmediatePropagation();
                }
                event.stopImmediatePropagation();
            });
        }
    }

    private setVirtualDimension(width: number, height: number) {
        this.virtualEle.style.width = width + 'px';
        this.virtualEle.style.height = height + 'px';
    }

    private setVirtualPosition(top: number, left: number) {
        this.virtualEle.style.top = top + 'px';
        this.virtualEle.style.left = left + 'px';
    }
}
