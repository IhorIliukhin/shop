import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.background') background!: string;

  @HostListener('mouseover')
  onMouseOver() {
    this.background = '#683ab71b';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.background = '';
  }
}
