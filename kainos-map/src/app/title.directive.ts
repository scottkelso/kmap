import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl} from '@angular/forms';

@Directive({
  selector: '[appTitle]',
  providers: [{provide: NG_VALIDATORS,
    useClass:TitleDirective, multi:true}]
})
export class TitleDirective implements Validator {

  constructor() { }

  validate (control: AbstractControl): {[key: string]: any} | null {
    if (control.value == null)
    {
      return null;
    }

    return control.value.length <= 100 ? null: {titletoolong: true};

  }

}
