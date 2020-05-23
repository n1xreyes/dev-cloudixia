import { Pipe, PipeTransform } from '@angular/core';
import { isObject } from 'lodash';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Pipe({
  name: 'fieldErrors'
})
export class FieldErrorsPipe implements PipeTransform {

  constructor(private translateService: TranslateService) {}

  transform(value: object): any {
    if (value) {
        const result: Observable<string>[] = [];
        Object.entries(value)
          .forEach((val: any[]) => {
            let resolvedMessage: Observable<string>;
            if (isObject(val[1])) {
              resolvedMessage = this.translateService.get(`fieldError.${val[0]}`, val[1]);
            } else {
              resolvedMessage = this.translateService.get(`fieldError.${val[0]}`);
            }
            result.push(resolvedMessage);
          });
        return result;
    }
  }

}
