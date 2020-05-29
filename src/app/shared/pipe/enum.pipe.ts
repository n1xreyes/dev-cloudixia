import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { isArray, isNil } from 'lodash';
import { Observable } from 'rxjs';

@Pipe({
  name: 'enum'
})
export class EnumPipe implements PipeTransform {

  constructor(private translateService: TranslateService) {}

  transform(value: any, ...args: string[]): Observable<string> | null {
    if (!isArray(args) || !args[0]) {
      throw new Error('EnumPipe require EnumName parameter.');
    }

    if (isNil(value)) {
      return null;
    }

    return this.translateService.get(`enum.${args[0]}.${value}`);
  }

}
