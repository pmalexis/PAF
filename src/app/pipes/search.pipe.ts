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
    if(value != undefined) {
      for (const el of value) {
        const field = el.name + '';
        if (typeof args === 'string' && field.toUpperCase().indexOf(args.toUpperCase()) !== -1) {
          filtered.push(el);
        }
      }
    }
    return filtered;
  }
}
