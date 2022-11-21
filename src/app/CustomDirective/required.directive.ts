import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[required]'
})
export class RequiredDirective {

 
  constructor(private renderer: Renderer2, private element: ElementRef) {}

  ngOnInit() {
    const parent = this.renderer.parentNode(this.element.nativeElement);
    console.log( parent.getElementsByTagName('LABEL'));
    parent.getElementsByTagName('LABEL')[0].innerHTML += ' &nbsp;<span style="color:red">*</span>';
  }
}