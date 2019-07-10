import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl} from '@angular/forms';

@Directive({
  selector: '[appDescription]',
  providers: [{provide: NG_VALIDATORS,
    useClass:DescriptionDirective, multi:true}]
})
export class DescriptionDirective implements Validator {

  constructor() { }

  validate (control: AbstractControl): {[key: string]: any} | null {
    if (control.value == null)
    {
      return null;
    }

    return control.value.length <= 300 ? null: {descriptiontoolong: true};

  }
}
