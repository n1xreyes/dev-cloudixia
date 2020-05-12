import { Pipe, PipeTransform } from '@angular/core';
import { toPairs, isObject, get } from 'lodash';

export const UI_VALIDATION_MESSAGE_KEYS = {
  'required': 'Field is required',
  'minlength': 'Min length is ${requiredLength}',
  'maxlength': 'Max length is ${requiredLength}',
  'email': 'Not valid email format',
  'min': 'Min value is ${min}',
  'max': 'Max value is ${max}'
};

@Pipe({
  name: 'fieldErrors'
})
export class FieldErrorsPipe implements PipeTransform {

  private propPattern: RegExp = /\${(\w+)}/;

  transform(value: object): any {
    if (value) {
        const result: string[] = [];
        toPairs(value).forEach((val: any[]) => {
            result.push(this.resolveMessage(val[0], val[1]));
        });
        return result;
    } else {
        return value;
    }
  }

  private getMessage(key: string): string {
    return get(UI_VALIDATION_MESSAGE_KEYS, key);
  }

  private resolveMessage(key: string, params?: object): string {
    let message: string = '';

    if (key) {
        if (params) {
          message = this.processMessage(key, params);
        } else {
          message = this.getMessage(key);
        }
    }

    return message;
  }

  private processMessage(messageCode: string, source: object): string {
    let message = this.getMessage(messageCode);

    if (message && message.length > 0 && source && isObject(source)) {
      message = this.replacePropVars(message, this.propPattern, source);
    }

    return message;
  }

  private replacePropVars(message: string, pattern: RegExp, source: object): string {
    if (!isObject(source)) {
        throw new Error('`source` must be an Object.');
    }

    let match: RegExpExecArray | null;
    while (match = pattern.exec(message)) {
        const variable: string = get(source, match[1]) || '';
        message = message.replace(match[0], variable);
    }

    return message;
  }

}
