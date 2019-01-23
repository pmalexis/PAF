import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const filtered = [];

    if (!args) {
      return value;
    }
    for (const el of value) {
      for (const property in el) {
        const field = el[property] + '';
        if (typeof args === 'string' && field.toUpperCase().indexOf(args.toUpperCase()) !== -1) {
          filtered.push(el);
        }
      }
    }
    return filtered;
  }
}
