import { Directive, Input,ViewContainerRef,TemplateRef } from '@angular/core';

@Directive({
  selector: '[appMyNgIf]'
})
export class MyNgIfDirective  {

  constructor(private ViewContainerRef:ViewContainerRef, private TemplateRef:TemplateRef<object>){}

@Input()set appMyNgIf(isBoolean:boolean)
{
  if(isBoolean)
  {
    this.ViewContainerRef.createEmbeddedView(this.TemplateRef);
  }
  else
  {
    this.ViewContainerRef.clear();

  }
}
}