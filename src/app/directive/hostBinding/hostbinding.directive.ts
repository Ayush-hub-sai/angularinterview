import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostbinding]',
  standalone: true
})
export class HostbindingDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string = 'red';

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'lightblue';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'transparent';
  }

}
