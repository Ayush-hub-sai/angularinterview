import { Directive, ElementRef, HostListener, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appHostlistner]',
  standalone: true
})
export class HostlistnerDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('lightblue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('red');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
