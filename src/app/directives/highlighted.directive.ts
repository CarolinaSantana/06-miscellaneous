import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

  @Input("appHighlighted") newColour:string;
  
  @HostListener('mouseenter') mouseEnter() {
    this.highligth( this.newColour || 'yellow');
  }

  @HostListener('mouseleave') mouseLeave() {
    this.highligth(null);
  }

  constructor( private el:ElementRef ) { 
    
  }

  private highligth (colour:string) {
    this.el.nativeElement.style.backgroundColor = colour;
  }

}
