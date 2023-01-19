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
    this.renderer.setStyle(this.element.nativeElement.offsetParent, 'color', 'white');
    this.renderer.setStyle(this.element.nativeElement.offsetParent, 'borderRadius', '20px');
    this.renderer.setStyle(this.element.nativeElement.offsetParent, 'letterSpacing', '1px');
    this.renderer.setStyle(this.element.nativeElement.offsetParent, 'margin', '0');
    this.renderer.setStyle(this.element.nativeElement.offsetParent, 'padding', '1rem');
    this.renderer.setStyle(this.element.nativeElement.offsetParent, 'background', 'linear-gradient(20deg, rgb(172, 77, 199), rgb(102, 0, 255))');
  }

  decrease(): void {
    this.renderer.removeAttribute(this.element.nativeElement.offsetParent, 'style');
  }
}
