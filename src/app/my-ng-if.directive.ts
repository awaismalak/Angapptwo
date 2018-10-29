import { Directive, Input,ViewContainerRef,TemplateRef,OnInit } from '@angular/core';

@Directive({
  selector: '[appMyNgIf]'
})
export class MyNgIfDirective implements OnInit {

  constructor(private ViewContainerRef:ViewContainerRef, private TemplateRef:TemplateRef<object>) { }
ngOnInit(){
 const isBool= true;
 if(isBool){
   this.ViewContainerRef.createEmbeddedView(this.TemplateRef);
 }
 else{
   this.ViewContainerRef.clear();
 }
}

}
