import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirectiveDirective {

  @HostBinding('class.open')
  toggle = false;

  @HostListener('click')
  toggleOpen() {
    this.toggle = !this.toggle;
  }

  constructor() { }

}
