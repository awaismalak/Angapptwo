import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appHeighLighter]'
})
export class HeighLighterDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.backgroundColor="gold";
   }

}
