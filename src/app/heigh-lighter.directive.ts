import { Directive ,ElementRef, Input, OnInit} from '@angular/core';

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
}
