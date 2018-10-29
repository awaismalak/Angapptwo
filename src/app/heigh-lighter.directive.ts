import { Directive ,ElementRef, Input, OnInit, HostListener} from '@angular/core';

@Directive({
  selector: '[appHeighLighter]'
})
export class HeighLighterDirective implements OnInit {
  @Input() bgColor:string;
  @Input() color:string;

  constructor(private el:ElementRef) {
    
   }
ngOnInit(){
  this.el.nativeElement.style.backgroundColor=this.bgColor;
  this.el.nativeElement.style.color=this.color;
    
}
@HostListener("mouseenter") asdfasdf(){
  this.el.nativeElement.style.backgroundColor="pink";
}
@HostListener("mouseleave") asfasdf444(){
  this.el.nativeElement.style.backgroundColor=this.bgColor;
}
}
