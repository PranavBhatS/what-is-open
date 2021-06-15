import { Directive, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Directive({
  selector: '[appNavbarAnimation]'
})
export class NavbarAnimationDirective {
  constructor(private renderer: Renderer2, private _element: ElementRef) {
  }

  @HostListener('window:scroll', ['$event'])
  private _onScroll(event: any) {
    if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75)
      this.renderer.addClass(this._element.nativeElement, 'expand-navbar');
    else
      this.renderer.removeClass(this._element.nativeElement, 'expand-navbar');
  }

}
