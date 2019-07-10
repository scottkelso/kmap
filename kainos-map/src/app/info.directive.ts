import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl} from '@angular/forms';

@Directive({
  selector: '[appInfo]',
  providers: [{provide: NG_VALIDATORS,
    useClass: InfoDirective, multi:true}]
})
export class InfoDirective implements Validator {

  constructor() { }

  validate (control: AbstractControl): {[key: string]: any} | null {
    if (control.value == null)
    {
      return null;
    }

    return control.value.length <= 100 ? null: {infotoolong: true};

  }

}
