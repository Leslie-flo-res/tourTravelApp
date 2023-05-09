import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImportantText]'
})
export class ImportantTextDirective {

  constructor(private yellowBk:ElementRef ) {
    yellowBk.nativeElement.style.background = "#ffffed" ;
   }

}
