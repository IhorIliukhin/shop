import { AfterViewChecked, Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClick]'
})
export class ClickDirective implements AfterViewChecked {

  @Input('appClick') value!: boolean;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngAfterViewChecked(): void {
    this.onClick()
  }

  @HostListener('click')
  onClick(): void {
    this.value ? this.decrease() : this.increase();
  }

  increase(): void {
    this.renderer.setStyle(this.element.nativeElement.offsetParent, 'fontSize', '18px');
    this.renderer.setStyle(this.element.nativeElement.offsetParent, 'fontWeight', '500');
    this.renderer.setStyle(this.element.nativeElement.offsetParent, 'letterSpacing', '1px');
    this.renderer.setStyle(this.element.nativeElement.offsetParent, 'margin', '0');
    this.renderer.setStyle(this.element.nativeElement.offsetParent, 'padding', '1rem');
    this.renderer.setStyle(this.element.nativeElement.offsetParent, 'background', '#ebe7ff');
  }

  decrease(): void {
    this.renderer.removeAttribute(this.element.nativeElement.offsetParent, 'style');
  }
}
